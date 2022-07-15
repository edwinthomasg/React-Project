import React, { useState,useEffect } from 'react'
import { AppBar, Button, Box, Toolbar, Typography, Tabs, Tab, } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { appBar, headerMenu, } from '../../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserToken, viewProfile } from '../redux/UserActions'
import { setSignOut, setSignUp } from '../redux/SignupActions'
import { clearBooking } from '../redux/BookActions'


const UserHeader = () => {
    const location = useLocation()
    const user = useSelector( state => state.user )
    const dispatch = useDispatch()
    const [selectTab, setSelectTab] = useState(0)
    const profile = useSelector( state => state.user.profile )
    const { userName } = profile
    const logoutHandler = () => {
        dispatch(clearBooking())
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
    useEffect(() => {
        if(user._userId)
        dispatch(viewProfile(user._userId))
    },[dispatch, user._userId]) /**To display user name in user header */
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
                        <Typography variant='h6' style={{position : 'relative', top :'10px', right : '50px'}}>Hi {userName} </Typography>
                        
                        <Button onClick={logoutHandler} LinkComponent={Link} to='/home' variant='outlined' sx={{ margin: 1, borderRadius: 3 }} color='warning'>Logout</Button>
                        </>)
                    }
                </Box>
            </Toolbar>
        </AppBar>
    </>)
}

export default UserHeader