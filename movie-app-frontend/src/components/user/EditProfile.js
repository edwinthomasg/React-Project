import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useStyles } from "../../styles/styles"

const EditProfile = () => {
    const userId = useSelector( state => state.tokener )
    const profile = useSelector(  state => state.auth.profile)
    console.log("user profile : ",profile)
    const { userName, userEmail, userPassword, userContact } = profile
    const [userCredentials, setUserCredentials] = useState({
        userName,
        userEmail,
        userPassword,
        userContact
    })
    console.log("user cred : ",userCredentials)
    const classes = useStyles()
    const changeCredentialHandler = (event) => {
        console.log(`${[event.target.name]} : ${event.target.value}`)
        setUserCredentials({
            [event.target.name] : event.target.value
        })
    }
    const updateHandler = () => {

    }
    return(<>
    <form  onSubmit={ updateHandler }>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
          My Details
          </Typography>
          <TextField type={'text'} name='userName' value={userCredentials.userName}  onChange={changeCredentialHandler} placeholder='Username' margin='normal' required/> 
          <TextField type={'email'} name='userEmail' value={userCredentials.userEmail} onChange={changeCredentialHandler} placeholder='EmailID' margin='normal' required/>
          <TextField type={'password'} name='userPassword' value={userCredentials.userPassword} onChange={changeCredentialHandler} placeholder='Password' margin='normal' required/>
          {/* <TextField type={'password'} name='userConfirmPassword' value={userCre}  onChange={changeCredentialHandler} placeholder='Confirm Password' margin='normal' required/> */}
          <TextField type={'text'} name='userContact' value={userCredentials.userContact}  onChange={changeCredentialHandler} placeholder='Contact Number' margin='normal' required/>
          <Button type='submit' variant='contained' color='warning' style={{margin : '5% 0'}}>Update</Button>
        </Box>
      </form>
    </>)
}

export default EditProfile