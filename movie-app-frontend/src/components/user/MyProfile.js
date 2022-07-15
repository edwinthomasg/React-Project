import { Button, SnackbarContent, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { viewProfile } from '../redux/UserActions'

 const MyProfile = () => {
  const userId = useSelector( state => state.user._userId )
  const profile = useSelector( state => state.user.profile )
  const location = useLocation()
  const dispatch = useDispatch()
    useEffect(() => {
      if(userId)
      dispatch(viewProfile(userId))
    },[userId])
    return(<>
      <Box sx={{
            width: 400,
            height: 370,
            margin: 'auto',
            marginTop:'90px'
        }}>
      <Stack spacing={1} sx={{ maxWidth: 600 }}>
            <SnackbarContent message={profile.userName} action="User Name" />
            <SnackbarContent message={profile.userEmail} action="User Email"/>
            <SnackbarContent message={profile.userContact} action="User Contact" />
        </Stack>
        <Button LinkComponent={Link} to='/my-profile/edit-profile' variant='outlined' sx={{ margin: 1, borderRadius: 3, marginLeft: 20, marginTop: 3 }} color='warning'>Edit</Button>
        </Box>
    </>)
 }

 export default MyProfile