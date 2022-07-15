import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStyles } from '../../styles/styles'
import { useSelector ,useDispatch } from 'react-redux'
import { setSignOut, toggleSignup } from '../redux/SignupActions'
import { storeUserToken } from '../redux/UserActions'
import { useForm } from 'react-hook-form'
import ReactJsAlert from "reactjs-alert"
import '../../styles/Style.css'
 
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState : {errors}, watch , reset} = useForm({
      mode : 'onChange'
    })
    const signup = useSelector( state => state.signUp.signup )
    const classes = useStyles()
    const signupHandler = () => {
      dispatch(toggleSignup())
    }
    const [errorMessage, setErrorMessage] = useState('')
    const { message, error } = useSelector( state => state.user )
  
    console.log("errorMesgsage : ",errorMessage)
    const submitHandler = async(userData) => {
      if(signup)
      {
        dispatch(storeUserToken(userData, 'signup'))  
        dispatch(setSignOut())
        navigate('/auth')
      }
      else{
        dispatch(storeUserToken(userData))
        navigate('/home')
        // if(error !== '')
        // {
        //   alert('invalid credentials')
        //   // navigate('/home')
        // }
      }
      // reset()
    }
    const password = watch('userPassword')

    return(<>
      <form  onSubmit={ handleSubmit(submitHandler) }>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
            { signup ? "Signup" : "Login" }
          </Typography>
          {message && <small>{message}</small>}

          { signup && <TextField {...register('userName',{ required : 'Username required', 
            pattern : {
              value : /^[a-zA-Z ]+$/,
              message : 'Username should contain only alphabets'
            },
            minLength : {
            value : 3,
            message : 'Username should contain atleast 3 letters'
          }})} type={'text'}  className='input-credential' placeholder='Username' margin='normal' />  }
          { errors.userName && <small className='credential-error'>{errors.userName.message}</small>}
          <TextField type={'text'} {...register('userEmail',{ required : 'Email required',
           pattern : {
             value : /^([a-z]+[\.-\d]*)@([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/,
             message : 'Invalid email format'
           }
          })} className='input-credential' placeholder='EmailID' margin='normal' />
          { errors.userEmail && <small className='credential-error'>{errors.userEmail.message}</small>}
          <TextField type={'password'} {...register('userPassword',{ required : 'Password required',
           pattern : {
            value : /^[a-zA-Z0-9]{8,20}$/,
            message : 'Password should contain atleast 8 characters'
           }
          })} className='input-credential' placeholder='Password' margin='normal' />
          { errors.userPassword && <small className='credential-error'>{errors.userPassword.message}</small>}
          {
            signup && <><TextField type={'password'} {...register('userConfirmPassword',{ required : 'Confirm Password required',
            validate : confirm => confirm === password || 'Password mismatch'
          })}  className='input-credential' placeholder='Confirm Password' margin='normal' />
           { errors.userConfirmPassword && <small className='credential-error'>{errors.userConfirmPassword.message}</small>}
            <TextField type={'text'} {...register('userContact',{ required : 'Contact required',
            pattern : {
              value : /^[6-9]{1}[0-9]{9}$/,
              message : 'Invalid number'
            }
          })} className='input-credential' placeholder='Contact Number' margin='normal' />
            { errors.userContact && <small className='credential-error'>{errors.userContact.message}</small>}
            </>
          }
          {error && <small>{error}</small>}
          <Button type='submit' variant='contained' color='warning' style={{margin : '5% 0'}}>{ signup ? "Signup" : "Login" }</Button>
          { !signup && <Typography>Dont't have an account ?</Typography> }
          <Link onClick={signupHandler} to='/auth'>{ !signup && "Signup"}</Link>
        </Box>
      </form>
      {/* <ReactJsAlert
          status={status} 
          type={type} 
          title={title}
          
        /> */}
    </>)
 }

 export default Login