import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from "../Dashboard items/Header";
import "../Dashboard items/dashboard.css";



const drawerWidth = 240;




export default function Modal() {

    function handleClick() {

        alert("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!");


    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>

                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Header />
                    {/* <Toolbar>
  <Typography variant="h6" noWrap component="div">
    Permanent drawer
  </Typography>
</Toolbar> */}

                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <List>
                        <h3>Windmill</h3>
                        {['Dashboard', 'Forms', 'Cards', 'Charts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        {['Buttons', 'Modals', 'Tables'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    <h2>Modals</h2>
                    <button onClick={handleClick} style={{
                        cursor: "pointer",
                        backgroundColor: "#7e3af2",
                        border: "2px solid #7e3af2",
                        color: "white",
                        width: "11%",
                        height: "25%",
                        borderRadius: "8px",
                        fontSize: "large",
                        margin: "5px 0"
                    }}>Open modal</button>
                </Box>
            </Box>





            {/* <h2>Modals</h2>
        <button onClick={handleClick} style={{
              cursor: "pointer",
              backgroundColor: "#7e3af2",
              border:"2px solid #7e3af2",
              color: "white",
              width: "11%",
              height: "25%",
              borderRadius: "8px",
              fontSize:"large"
        }}>Open modal</button> */}
        </>
    );
}