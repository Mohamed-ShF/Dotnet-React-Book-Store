import { ShoppingCart } from "@mui/icons-material";
import {List, AppBar, ListItem, Switch, Toolbar, Typography, IconButton, Badge, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const midlinks =[
    {title:'catalog', path:'/catalog'},
    {title:'about', path:'/about'},
    {title:'contact', path:'/contact'},
]

const rightlinks =[
    {title:'login', path:'/login'},
    {title:'register', path:'/register'},
]

const navStyles = {
    color: 'inherit',
    Typography:'h6',
    textDecoration:'none',
    '&:hover':{
        color:'grey.500'
    },
    '&.active':{
        color:'text.secondary'
    }
}

interface Props{
    darkMode:boolean;
    handleThemeChange:()=>void;
}

export default function Header({darkMode,handleThemeChange}:Props){
    return(
        <>
            <AppBar position="static" sx={{mb: 4}}>
                <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Box display='flex' alignItems='center'>
                        <Typography variant="h6" component={NavLink} 
                        to='/'
                        sx={navStyles}>
                            EQRA2
                        </Typography>
                        <Switch checked={darkMode} onChange={handleThemeChange} />
                    </Box>

                    <List sx={{display: 'flex'}}>
                        {midlinks.map(({title,path})=>(
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                                >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}    
                    </List>   

                    <Box display='flex' alignItems='center'>
                        <IconButton size="large" edge="start" color="inherit" sx={{mr: 2}}>
                            <Badge badgeContent='4' color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                        <List sx={{display: 'flex', justifyContent:'center'}}>
                            {rightlinks.map(({title,path})=>(
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                    >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}    
                        </List>
                    </Box>            
                </Toolbar>
            </AppBar>
        </>
    )
}