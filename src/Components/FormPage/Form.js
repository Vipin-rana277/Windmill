import React from "react";
import { DataGrid } from '@mui/x-data-grid';
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
import "./form.css";


const columns = [
    {
        field: 'date',
        width: 150,
        type: 'date',
        renderHeader: () => (
            <strong>
                {'Multiselect '}
            </strong>
        ),
    },
];

const rows = [
    {
        id: 1,
        date: new Date(1997, 9, 4),
    },
    {
        id: 2,
        date: new Date(1984, 1, 1),
    },
    {
        id: 3,
        date: new Date(1992, 2, 1),
    },
];

const drawerWidth = 240;

export default function Form() {
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
  
  <h2>Forms</h2>
            <h4>Elements</h4>
            <div className="element">
                <label>Name</label>
                <input id="elementChildOne" type="text" placeholder="Jane Doe" />
                <label>Disabled</label>
                <input id="elementChildTwo" type="text" placeholder="Jane Doe" />
                <label>Account Type</label>
                <input type="radio" /><span>Personal</span>
                <input type="radio" /><span>Busines</span>
                <input type="radio" /><span>Disabled</span>
                <label>Requested Limit</label>
                <input id="elementChildThree" type="text" value={"$1,000"} />
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} />
                </div>
                <label>Message</label>
                <textarea id="textField" rows={4} cols={163}>Enter some long form content</textarea>
                <input type="checkbox" /><span>I agree to the <span style={{ textDecoration: "underline" }}>privacy policy.</span></span>

            </div>
            <h2>Validation</h2>
            <div className="validation">
                <label>Invalid input</label>
                <input id="validationChildOne" type="text" placeholder="Jane Doe" />
                <label>Valid input</label>
                <input id="validationChildTwo" type="text" placeholder="Jane Doe" />
                <label>Helper text </label>
                <input id="validationChildThree" type="text" placeholder="Jane Doe" />
            </div>

            <h2>Icons</h2>

            <div className="icon">
                <label>Icon left </label>

                <input id="iconChildOne" type="text" placeholder="Jane Doe" />
                <label>Icon right </label>
                <input id="iconChildTwo" type="text" placeholder="Jane Doe" />

            </div>


            <h2>Buttons</h2>

            <div className="button">
                <label>Button left </label>
                <input id="buttonChildOne" type="text" placeholder="Jane Doe" />
                <label>Button right </label>
                <input id="buttonChildTwo" type="text" placeholder="Jane Doe" />

            </div>
 
</Box>
</Box>
           


            {/* <h2>Forms</h2>
            <h4>Elements</h4>
            <div className="element">
                <label>Name</label>
                <input id="elementChildOne" type="text" placeholder="Jane Doe" />
                <label>Disabled</label>
                <input id="elementChildTwo" type="text" placeholder="Jane Doe" />
                <label>Account Type</label>
                <input type="radio" /><span>Personal</span>
                <input type="radio" /><span>Busines</span>
                <input type="radio" /><span>Disabled</span>
                <label>Requested Limit</label>
                <input id="elementChildThree" type="text" value={"$1,000"} />
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} />
                </div>
                <label>Message</label>
                <textarea id="textField" rows={4} cols={163}>Enter some long form content</textarea>
                <input type="checkbox" /><span>I agree to the <span style={{ textDecoration: "underline" }}>privacy policy.</span></span>

            </div>
            <h2>Validation</h2>
            <div className="validation">
                <label>Invalid input</label>
                <input id="validationChildOne" type="text" placeholder="Jane Doe" />
                <label>Valid input</label>
                <input id="validationChildTwo" type="text" placeholder="Jane Doe" />
                <label>Helper text </label>
                <input id="validationChildThree" type="text" placeholder="Jane Doe" />
            </div>

            <h2>Icons</h2>

            <div className="icon">
                <label>Icon left </label>

                <input id="iconChildOne" type="text" placeholder="Jane Doe" />
                <label>Icon right </label>
                <input id="iconChildTwo" type="text" placeholder="Jane Doe" />

            </div>


            <h2>Buttons</h2>

            <div className="button">
                <label>Button left </label>
                <input id="buttonChildOne" type="text" placeholder="Jane Doe" />
                <label>Button right </label>
                <input id="buttonChildTwo" type="text" placeholder="Jane Doe" />

            </div> */}

        </>
    );
}