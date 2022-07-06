import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useStyles } from "../../styles/styles"
import { retrieveUserToken, viewProfile } from "../redux/authActions"

const EditProfile = () => {
    const classes = useStyles()
    const userId = useSelector( state => state.tokener._userId )
    const profile = useSelector( state => state.auth.profile )
    const dispatch = useDispatch()
    const [userCredentials, setUserCredentials] = useState(profile)

    useEffect(() => {
      dispatch(viewProfile(userId))
    },[userId])
    useEffect(() => {
        if(profile)
        setUserCredentials(profile)
    },[profile])
    
    const changeCredentialHandler = (event) => {
        setUserCredentials((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
    const updateHandler = () => {
        
    }
    return(<>
    <form  onSubmit={ updateHandler }>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
          My Details
          </Typography>
          <TextField type={'text'} name='userName' value={userCredentials.userName || ""}  onChange={changeCredentialHandler} placeholder='Username' margin='normal' required/> 
          <TextField type={'email'} name='userEmail' value={userCredentials.userEmail || ""} onChange={changeCredentialHandler} placeholder='EmailID' margin='normal' required/>
          <TextField type={'password'} name='userPassword' value={userCredentials.userPassword || ""} onChange={changeCredentialHandler} placeholder='Password' margin='normal' required/>
          {/* <TextField type={'password'} name='userConfirmPassword' value={userCre}  onChange={changeCredentialHandler} placeholder='Confirm Password' margin='normal' required/> */}
          <TextField type={'text'} name='userContact' value={userCredentials.userContact || ""}  onChange={changeCredentialHandler} placeholder='Contact Number' margin='normal' required/>
          <Button type='submit' variant='contained' color='warning' style={{margin : '5% 0'}}>Update</Button>
        </Box>
      </form>
    </>)
}

export default EditProfile