import React from "react";
import Footer from "../Dashboard items/Footer";
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

export default function Table() {
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

                    <h2>Tables</h2>
                    <p style={{ fontSize: "large" }}>Simple table</p>
                    <Footer />
                    <p style={{ fontSize: "large" }}>Table with actions </p>
                    <Footer />
                </Box>
            </Box>





            {/* <h2>Tables</h2>
        <p style={{fontSize:"large"}}>Simple table</p>
        <Footer/>
        <p style={{fontSize:"large"}}>Table with actions </p>
        <Footer/> */}

        </>
    );
}