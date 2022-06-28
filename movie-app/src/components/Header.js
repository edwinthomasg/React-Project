import React from 'react'
import {AppBar, Button, Box, Toolbar, Typography, Tabs, Tab} from '@mui/material'
const Header = () => {
    return(<>
        <AppBar position='sticky' sx={{background:'black'}}>
            <Toolbar>
                <Typography variant='h4'>Ticketnew</Typography>
                <Box display='flex'>
                    <Tabs>
                        <Tab label="Home"/>
                        <Tab label="Movies"/>
                        <Tab label="Orders"/>
                    </Tabs>
                </Box>
                <Box display="flex" marginLeft="auto" >
                    <Button variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>Login</Button>
                    <Button variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>Signup   </Button>
                </Box>
            </Toolbar>
        </AppBar>

    </>)
}

export default Header