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
import Header from "./Header";
import "./dashboard.css";
import Main from "./Main";
// import Form from "../FormPage/Form";
// import Card from "../CardPage/Card";
// import Charts from "../ChartsPage/Charts";
// import Button from "../ButtonPage/Button";
// import Modal from "../ModalPage/Modal";
// import Footer from "./Footer";
// import Table from "../TablePage/Table";





// function Help() {
//   return (
//     <Box
//       component="main"
//       sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//     >
//       <Toolbar />
//       <{} />

//     </Box>

//   );

// }



const drawerWidth = 240;

export default function SideBar() {
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
         <Main/>
        </Box>
      </Box>
     

    </>
  );
}
