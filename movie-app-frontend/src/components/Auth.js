import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStyles } from '../styles/styles'
import axios from 'axios'
import { useSelector ,useDispatch } from 'react-redux'
import { setLogin, setSignOut, toggleSignup } from './redux/authActions'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signup = useSelector( state => state.signup )
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
    const signupHandler = () => {
      dispatch(toggleSignup())
    }
    const submitHandler = (event) => {
      event.preventDefault()
      console.log("user credentials : ",userCredentials)
      if(signup)
      {
        sendRequest("signup")
        .then(() => dispatch(setSignOut()))
        .then( data => console.log(data) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        navigate('/auth')
      }
      else{
        sendRequest()
        .then(() => dispatch(setLogin()))
        .then( data => console.log(data) )
        navigate('/home')
      }
    }
    return(<>
      <form  onSubmit={ submitHandler }>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
            { signup ? "Signup" : "Login" }
          </Typography>

          { signup && <TextField type={'text'} name='userName' value={userCredentials.userName} onChange={changeCredentialHandler} placeholder='Username' margin='normal' required/>  }

          <TextField type={'email'} name='userEmail' value={userCredentials.userEmail} onChange={changeCredentialHandler} placeholder='EmailID' margin='normal' required/>
          <TextField type={'password'} name='userPassword' value={userCredentials.userPassword} onChange={changeCredentialHandler} placeholder='Password' margin='normal' required/>
          {
            signup && <><TextField type={'password'} name='userConfirmPassword' value={userCredentials.userConfirmPassword} onChange={changeCredentialHandler} placeholder='Confirm Password' margin='normal' required/>
            <TextField type={'text'} name='userContact' value={userCredentials.userContact} onChange={changeCredentialHandler} placeholder='Contact Number' margin='normal' required/></>
          }
          <Button type='submit' variant='contained' color='warning' style={{margin : '5% 0'}}>{ signup ? "Signup" : "Login" }</Button>
          { !signup && <Typography>Dont't have an account ?</Typography> }
          <Link onClick={signupHandler} to='/auth'>{ !signup && "Signup"}</Link>
        </Box>
      </form>
      {/* <p> signup = { signup ? "true" : "false" }</p> */}
      
      
    </>)
 }

 export default Login