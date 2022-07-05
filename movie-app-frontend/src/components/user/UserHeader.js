import React, { useState,useEffect } from 'react'
import { AppBar, Button, Box, Toolbar, Typography, Tabs, Tab, } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { appBar, headerMenu, } from '../../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserToken, setSignOut, setSignUp } from '../redux/authActions'

const UserHeader = () => {
    const location = useLocation()
    const user = useSelector( state => state.tokener )
    const dispatch = useDispatch()
    const [selectTab, setSelectTab] = useState(0)
    const logoutHandler = () => {
        dispatch(deleteUserToken())
    }
    const signupHandler = () => {
        dispatch(setSignUp())
    }
    const loginHandler = () => {
        dispatch(setSignOut())
    }
    useEffect( () => {
        if(location.pathname === "/" || location.pathname === '/home')
        {
            setSelectTab(0)
        }
        else if(location.pathname === "/movies")
        {
            setSelectTab(1)
        }
        else if(location.pathname === "/bookings")
        {
            setSelectTab(2)
        }
        else if(location.pathname === '/my-profile')
        {
            setSelectTab(3)
        }
    },[selectTab,user._userId])
    return (<>
        <AppBar position='sticky' style={appBar}>
            <Toolbar>
                <Typography variant='h4' margin="0 5%">TicketNew</Typography>
                <Tabs value={selectTab} onChange={ (event, value) => setSelectTab(value) } >

                    <Tab LinkComponent={Link} to='/home' label="Home" style={headerMenu} />
                    <Tab LinkComponent={Link} to='/movies' label="Movies" style={headerMenu} />
                    <Tab LinkComponent={Link} to='/bookings' label="Bookings" style={headerMenu} />
                 { user._userId && <Tab LinkComponent={Link} to='/my-profile' label="My Profile" style={headerMenu} /> }

                </Tabs>

                <Box display="flex" marginLeft="auto">
                    {
                        !user._userId && 
                        <>
                            <Button onClick={loginHandler} LinkComponent={Link} to='/auth' variant='outlined' sx={{ margin: 1, borderRadius: 3 }} color='primary'>Login</Button>
                            <Button onClick={signupHandler} LinkComponent={Link} to='/auth' variant='outlined' sx={{ margin: 1, borderRadius: 3 }} color='warning'>Signup</Button>
                        </>
                    }
                    {
                        user._userId && (<>
                        <Typography variant='h5' style={{position : 'relative', top :'8px', right : '50px'}}>Hi { user.userName }</Typography>
                        
                        <Button onClick={logoutHandler} LinkComponent={Link} to='/home' variant='outlined' sx={{ margin: 1, borderRadius: 3 }} color='warning'>Logout</Button>
                        </>)
                    }
                </Box>
            </Toolbar>
        </AppBar>
        {/* <p> user login = {login ? "true" : "false"} </p>
        <p> user signups = {signup ? "true" : "false"} </p> */}
    </>)
}

export default UserHeader