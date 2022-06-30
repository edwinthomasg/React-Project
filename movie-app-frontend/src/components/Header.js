import React from 'react'
import { AppBar, Button, Box, Toolbar, Typography, Tabs, Tab, } from '@mui/material'
import { Link } from 'react-router-dom'
import { useStyles } from '../styles/styles'
import { appBar, headerMenu,  } from '../styles/styles'

const Header = () => {
    const classes = useStyles()
    return(<>
        <AppBar position='sticky' style={appBar}>
            <Toolbar>
                <Typography variant='h4'  margin="0 5%">TicketNew</Typography>
                <Tabs>
                    <Tab LinkComponent={Link} to='/home' label="Home" style={headerMenu}/>
                    <Tab LinkComponent={Link} to='/movies'label="Movies" style={headerMenu}/>
                    <Tab LinkComponent={Link} to='/orders' label="Orders" style={headerMenu}/>
                </Tabs>

                <Box display="flex" marginLeft="auto">
                    <Button LinkComponent={Link} to='/login' variant='outlined' sx={{ margin : 1 , borderRadius : 3 }} color='primary'>Login</Button>
                    <Button LinkComponent={Link} to='/signup' variant='outlined' sx={{ margin : 1 , borderRadius : 3 }} color='warning'>Signup</Button>
                    <Button LinkComponent={Link} to='/home' variant='outlined' sx={{ margin : 1 , borderRadius : 3 }} color='warning'>Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>

    </>)
}

export default Header