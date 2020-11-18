import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';



const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu" >
                        <Menu></Menu>
                    </IconButton>
                    <Typography variant="h5" style={style}>
                        React SpringBoot App
                    </Typography>
                    <Button color="inherit">LOGIN</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
const style = {
    flexGrow : 1        
}
export default NavBar;