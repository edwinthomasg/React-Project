import { Button, SnackbarContent, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { viewProfile } from '../redux/authActions'

 const MyProfile = () => {
  const userId = useSelector( state => state.tokener._userId )
  const profile = useSelector( state => state.auth.profile )
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewProfile(userId))
    },[userId])
    return(<>
      My Profile Page
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