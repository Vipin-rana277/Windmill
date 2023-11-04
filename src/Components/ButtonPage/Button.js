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
import "./button.css";



const drawerWidth = 240;


export default function Button() {
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
  <h2>Buttons</h2>
            <h4>Primary</h4>
            <button className="largerbtn">Larger Button</button>
            <button className="largebtn">Large Button</button>
            <button className="regularbtn">Regular </button>
            <button className="routerbtn">Router Link </button>
            <button className="disablebtn">Disabled</button>
            <button className="smallbtn">Small</button>

            <h4>Outline</h4>
            <button className="outlinelargerbtn">Larger Button</button>
            <button className="outlinelargebtn">Large Button</button>
            <button className="outlineregularbtn">Regular </button>
            <button className="outlinerouterbtn">Router Link </button>
            <button className="outlinedisablebtn">Disabled</button>
            <button className="outlinesmallbtn">Small</button>

            <h4>Link</h4>
            <button className="linklargerbtn">Larger Button</button>
            <button className="linklargebtn">Large Button</button>
            <button className="linkregularbtn">Regular </button>
            <button className="linkrouterbtn">Router Link </button>
            <button className="linkdisablebtn">Disabled</button>
            <button className="linksmallbtn">Small</button>
</Box>
</Box>



            {/* <h2>Buttons</h2>
            <h4>Primary</h4>
            <button className="largerbtn">Larger Button</button>
            <button className="largebtn">Large Button</button>
            <button className="regularbtn">Regular </button>
            <button className="routerbtn">Router Link </button>
            <button className="disablebtn">Disabled</button>
            <button className="smallbtn">Small</button>

            <h4>Outline</h4>
            <button className="outlinelargerbtn">Larger Button</button>
            <button className="outlinelargebtn">Large Button</button>
            <button className="outlineregularbtn">Regular </button>
            <button className="outlinerouterbtn">Router Link </button>
            <button className="outlinedisablebtn">Disabled</button>
            <button className="outlinesmallbtn">Small</button>

            <h4>Link</h4>
            <button className="linklargerbtn">Larger Button</button>
            <button className="linklargebtn">Large Button</button>
            <button className="linkregularbtn">Regular </button>
            <button className="linkrouterbtn">Router Link </button>
            <button className="linkdisablebtn">Disabled</button>
            <button className="linksmallbtn">Small</button> */}
        </>
    );
}