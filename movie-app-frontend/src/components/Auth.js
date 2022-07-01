import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStyles } from '../styles/styles'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/slice'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isSignUp, setIsSignUp] = useState(false)
    const [ userCredentials, setUserCredentials] = useState({
      userName : '',
      userEmail : '',
      userPassword : '',
      userConfirmPassword : '',
      userContact : ''
    })
    const { userName, userEmail, userPassword, userConfirmPassword, userContact } = userCredentials
    const classes = useStyles()
    
    const sendRequest = async(type="login") => {
      console.log(`http://localhost:3040/users/${type}`)
      const res = await axios.post(`http://localhost:3040/users/${type}`,{
        userName,
        userEmail,
        userPassword,
        userConfirmPassword,
        userContact
      }).catch( err => console.log(err.message) )

      const data = await res.data
      console.log(data)
      return data
    }
    const changeCredentialHandler = (event) => {
      setUserCredentials((prevState) => ({
        ...prevState,
        [event.target.name] : event.target.value
      }))
    }
    const submitHandler = (event) => {
      event.preventDefault()
      console.log("user credentials : ",userCredentials)
      if(isSignUp)
      {
        setIsSignUp(false)
        sendRequest("signup")
        .then(() => dispatch(authActions.login()))
        .then( data => console.log(data) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        navigate('/auth')
      }
      else{
        sendRequest()
        .then(() => dispatch(authActions.login()))
        .then( data => console.log(data) )
        navigate('/home')
      }
    }
    return(<>
      <form  onSubmit={ submitHandler }>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
            { isSignUp ? "Signup" : "Login" }
          </Typography>

          { isSignUp && <TextField type={'text'} name='userName' value={userCredentials.userName} onChange={changeCredentialHandler} placeholder='Username' margin='normal' required/>  }

          <TextField type={'email'} name='userEmail' value={userCredentials.userEmail} onChange={changeCredentialHandler} placeholder='EmailID' margin='normal' required/>
          <TextField type={'password'} name='userPassword' value={userCredentials.userPassword} onChange={changeCredentialHandler} placeholder='Password' margin='normal' required/>
          {
            isSignUp && <><TextField type={'password'} name='userConfirmPassword' value={userCredentials.userConfirmPassword} onChange={changeCredentialHandler} placeholder='Confirm Password' margin='normal' required/>
            <TextField type={'text'} name='userContact' value={userCredentials.userContact} onChange={changeCredentialHandler} placeholder='Contact Number' margin='normal' required/></>
          }
          <Button type='submit' variant='contained' color='warning' style={{margin : '5% 0'}}>{ isSignUp ? "Signup" : "Login" }</Button>
          { !isSignUp && <Typography>Dont't have an account ?</Typography> }
          <Link onClick={() => setIsSignUp(!isSignUp)} to='/auth'>{ !isSignUp && "Signup"}</Link>
        </Box>
      </form>
      <p> signup = {isSignUp ? "true" : "false"}</p>
      
    </>)
 }

 export default Login