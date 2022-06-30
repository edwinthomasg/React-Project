import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStyles } from '../styles/styles'
const Login = () => {
    const [isSignUp, setIsSignUp] = useState(true)
    const [ userCredentials, setUserCredentials] = useState({
      userName : '',
      userEmail : '',
      userPassword : '',
      userConfirmPassword : '',
      userContact : ''
    })
    const classes = useStyles()
    
    const changeCredentialHandler = (event) => {
      setUserCredentials((prevState) => ({
        ...prevState,
        [event.target.name] : event.target.value
      }))
    }
    const submitHandler = (event) => {
      event.preventDefault()
      console.log("user credentials : ",userCredentials)
    }
    return(<>
      <form  onSubmit={ submitHandler }>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
            { isSignUp ? "Login" : "Signup" }
          </Typography>

          { !isSignUp && <TextField type={'text'} name='userName' value={userCredentials.userName} onChange={changeCredentialHandler} placeholder='Username' margin='normal' required/>  }

          <TextField type={'email'} name='userEmail' value={userCredentials.userEmail} onChange={changeCredentialHandler} placeholder='EmailID' margin='normal' required/>
          <TextField type={'password'} name='userPassword' value={userCredentials.userPassword} onChange={changeCredentialHandler} placeholder='Password' margin='normal' required/>
          {
            !isSignUp && <><TextField type={'password'} name='userConfirmPassword' value={userCredentials.userConfirmPassword} onChange={changeCredentialHandler} placeholder='Confirm Password' margin='normal' required/>
            <TextField type={'text'} name='userContact' value={userCredentials.userContact} onChange={changeCredentialHandler} placeholder='Contact Number' margin='normal' required/></>
          }
          <Button type='submit' variant='contained' color='warning'>Submit</Button>
          <Button onClick={() => setIsSignUp(!isSignUp)}>
            Back To { isSignUp ? "Signup" : "Login" }
          </Button>
        </Box>
      </form>
    </>)
 }

 export default Login