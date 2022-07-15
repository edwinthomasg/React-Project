import React, { useState,useEffect } from 'react'
import { AppBar, Button, Box, Toolbar, Typography, Tabs, Tab, } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useStyles } from '../../styles/styles'
import { appBar, headerMenu, } from '../../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAdminToken, viewAdminProfile } from '../redux/AdminActions'

const AdminHeader = () => {
    const classes = useStyles()
    const location = useLocation()
    const admin = useSelector( state => state.admin )
    const dispatch = useDispatch()
    const [selectTab, setSelectTab] = useState(0)
    const logoutHandler = () => {
        dispatch(deleteAdminToken())
    }
    const navigate = useNavigate()
    useEffect( () => {
        if(location.pathname === "/admin" || location.pathname === '/admin/home')
        {
            setSelectTab(0)
        }
        else if(location.pathname === "/admin/movies")
        {
            setSelectTab(1)
        }
        else if(location.pathname === "/admin/bookings")
        {
            setSelectTab(2)
        }
        else if(location.pathname === "/admin/my-profile")
        {
            setSelectTab(3)
        }
        else if(location.pathname === "/admin/feedbacks")
        {
            setSelectTab(4)
        }
    },[selectTab,admin._adminId])
    // useEffect(() => {
    //     dispatch(viewAdminProfile(admin._adminId))
    // },[admin._adminId])
    return (<>
        <AppBar position='sticky' style={appBar}>
            <Toolbar>
                <Typography variant='h4' margin="0 5%">TicketNew</Typography>
                <Tabs value={selectTab} onChange={ (event, value) => setSelectTab(value) } >

                    <Tab LinkComponent={Link} to='/admin/home' label="Home" style={headerMenu} />
                    {
                        admin._adminId  && <Tab LinkComponent={Link} to='/admin/movies' label="Add Movies" style={headerMenu} />
                    }
                    <Tab LinkComponent={Link} to='/admin/bookings' label="Bookings" style={headerMenu} />
                    {
                        admin._adminId  && <Tab LinkComponent={Link} to='/admin/my-profile' label="My Profile" style={headerMenu} />
                    }
                    <Tab LinkComponent={Link} to='/admin/feedbacks' label="Feedbacks" style={headerMenu} />

                </Tabs>

                <Box display="flex" marginLeft="auto">
                    {
                        !admin._adminId && <Button LinkComponent={Link} to='/admin/login' variant='outlined' sx={{ margin: 1, borderRadius: 3 }} color='primary'>Login</Button>
                    }
                    {
                        admin._adminId && <Button onClick={logoutHandler} LinkComponent={Link} to='/admin/home' variant='outlined' sx={{ margin: 1, borderRadius: 3 }} color='warning'>Logout</Button>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    </>)
}

export default AdminHeader