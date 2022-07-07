import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStyles } from '../../styles/styles'
import { useSelector ,useDispatch } from 'react-redux'
import { setSignOut, toggleSignup } from '../redux/signupActions'
import { storeUserToken } from '../redux/userActions'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signup = useSelector( state => state.signUp.signup )
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
    const signupHandler = () => {
      dispatch(toggleSignup())
    }
    const submitHandler = (event) => {
      event.preventDefault()
      console.log("user credentials : ",userCredentials)
      if(signup)
      {
        dispatch(storeUserToken(userCredentials, 'signup'))  
        dispatch(setSignOut())                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        navigate('/auth')
      }
      else{
        dispatch(storeUserToken(userCredentials))
        navigate('/home',{replace : true})
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