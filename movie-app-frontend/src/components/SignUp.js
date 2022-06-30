import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStyles } from '../styles/styles'
const Login = () => {
    // const [isLogin, setIsLogin]
    const [ submitCredentials, setSubmitCredentials] = useState({
      userName : '',
      userEmail : '',
      userPassword : '',
      userConfirmPassword : '',
      userContact : ''
    })
    const classes = useStyles()
    
    const changeCredentialHandler = (event) => {
      setSubmitCredentials({
        [event.target.name] : event.target.value
      })
    }
    const submitHandler = (event) => {
      event.preventDefault()
    }
    return(<>
      <form onSubmit={ submitHandler }>
        <Box className = {classes.submitForm}>
          <Typography padding={1} variant='h4' textAlign="center">Signup</Typography>
          <TextField type={'text'} name='userName' value={submitCredentials.userName} onChange={changeCredentialHandler} placeholder='Username' margin='normal' required/>
          <TextField type={'email'} name='userEmail' value={submitCredentials.userEmail} onChange={changeCredentialHandler} placeholder='EmailID' margin='normal' required/>
          <TextField type={'password'} name='userPassword' value={submitCredentials.userPassword} onChange={changeCredentialHandler} placeholder='Password' margin='normal' required/>
          <TextField type={'password'} name='userConfirmPassword' value={submitCredentials.userConfirmPassword} onChange={changeCredentialHandler} placeholder='Confirm Password' margin='normal' required/>
          <TextField type={'text'} name='userContact' value={submitCredentials.userContact} onChange={changeCredentialHandler} placeholder='Contact Number' margin='normal' required/>
          <Button type='submit' variant='contained' color='warning'>Submit</Button>
          <Button>Back To Login</Button>
        </Box>
      </form>
    </>)
 }

 export default Login