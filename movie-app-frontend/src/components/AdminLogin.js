import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../styles/styles'
import axios from 'axios'
import { useSelector ,useDispatch } from 'react-redux'
import { setAdminLogin, setLogin } from './redux/authActions'


const AdminLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ adminCredentials, setAdminCredentials] = useState({
      adminEmail : '',
      adminPassword : ''
    })
    const { adminEmail, adminPassword } = adminCredentials
    const classes = useStyles()
    // const sendRequest = async(type="login") => {
    //   console.log(`http://localhost:3040/users/${type}`)
    //   const res = await axios.post(`http://localhost:3040/users/${type}`,{
    //     adminEmail,
    //     adminPassword
    //   }).catch( err => console.log(err.message) )

    //   const data = await res.data
    //   console.log(data)
    //   return data
    // }
    const changeCredentialHandler = (event) => {
        setAdminCredentials((prevState) => ({
        ...prevState,
        [event.target.name] : event.target.value
      }))
    }
    const submitHandler = (event) => {
      event.preventDefault()
      console.log("admin credentials : ",adminCredentials)
      dispatch(setAdminLogin())
      navigate('/admin/home')
    }
    return(<>
      <form  onSubmit={ submitHandler }>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
           Admin Login
          </Typography>
          <TextField type={'email'} name='adminEmail' value={adminCredentials.adminEmail} onChange={changeCredentialHandler} placeholder='EmailID' margin='normal' required/>
          <TextField type={'password'} name='adminPassword' value={adminCredentials.adminPassword} onChange={changeCredentialHandler} placeholder='Password' margin='normal' required/>
          <Button type='submit' variant='contained' color='warning' style={{margin : '5% 0'}}>Login</Button>
        </Box>
      </form>
      
    </>)
 }

 export default AdminLogin