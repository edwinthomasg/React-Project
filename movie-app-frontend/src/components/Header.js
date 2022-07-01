import React, { useState } from 'react'
import { AppBar, Button, Box, Toolbar, Typography, Tabs, Tab, } from '@mui/material'
import { Link } from 'react-router-dom'
import { useStyles } from '../styles/styles'
import { appBar, headerMenu,  } from '../styles/styles'
import { useSelector } from 'react-redux'

const Header = () => {
    const classes = useStyles()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const [ selectTab, setSelectTab ] = useState(0)
    return(<>
        <AppBar position='sticky' style={appBar}>
            <Toolbar>
                <Typography variant='h4'  margin="0 5%">TicketNew</Typography>
                <Tabs value={selectTab} onChange={(event, value) => setSelectTab(value)}>
                    <Tab LinkComponent={Link} to='/home' label="Home" style={headerMenu}/>
                    <Tab LinkComponent={Link} to='/movies'label="Movies" style={headerMenu}/>
                    <Tab LinkComponent={Link} to='/bookings' label="Bookings" style={headerMenu}/>
                </Tabs>

                <Box display="flex" marginLeft="auto">
                    { 
                    !isLoggedIn && <>                
                    <Button LinkComponent={Link} to='/auth' variant='outlined' sx={{ margin : 1 , borderRadius : 3 }} color='primary'>Login</Button>
                    <Button LinkComponent={Link} to='/auth' variant='outlined' sx={{ margin : 1 , borderRadius : 3 }} color='warning'>Signup</Button>
                    </>
                    }
                    {
                        isLoggedIn && <Button LinkComponent={Link} to='/auth' variant='outlined' sx={{ margin : 1 , borderRadius : 3 }} color='warning'>Logout</Button>
                    }
                </Box>
            </Toolbar>
        </AppBar>

    </>)
}

export default Header