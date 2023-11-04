import React from "react";
import './card.css';
import { Data } from "../Dashboard items/Main";
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
// import Data from '../Dashboard items/Main/Data';
// import user from "../Images/user.png";
// import user from "../Images/shopping.png";
// import user from "../Images/playing.png";
// import user from "../Images/information.png";

const drawerWidth = 240;

export default function Card() {
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
                    <h2>Cards</h2>
                    <h4>Big section cards</h4>
                    <div className="section-child">
                        <p>Large, full width sections goes here</p>
                    </div>
                    <h4>Responsive cards</h4>
                    <Data />
                    <h4>Cards with title</h4>
                    <div className="cards">
                        <div className="cardsRevenue">
                            <p><b>Revenue</b></p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
                        </div>
                        <div className="cardsColor">
                            <p><b>Colored card</b></p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
                        </div>
                    </div>
                </Box>
            </Box>
            {/* <h2>Cards</h2>
            <h4>Big section cards</h4>
            <div className="section-child">
                <p>Large, full width sections goes here</p>
            </div>
            <h4>Responsive cards</h4>
            <Data />
            <h4>Cards with title</h4>
            <div className="cards">
                <div className="cardsRevenue">
                    <p><b>Revenue</b></p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
                </div>
                <div className="cardsColor">
                    <p><b>Colored card</b></p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
                </div>
            </div> */}
        </>
    );
}