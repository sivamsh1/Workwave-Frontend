import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess'; 
import ExpandMore from '@mui/icons-material/ExpandMore'; 
import '../Home/Home.css'
import MountedModal from './MountedModal';
import { useEffect } from 'react';
import axios from '../../../Axios';
import { useState } from 'react';


const drawerWidth = 298;

export default function Home() {

  const [workSpaces,setWorkSpaces] = useState([]) 


  const getWorkSpaceDatas = ()=>{
  
    axios.post('/user/get-workspaces').then((res)=>{
        const workSpaceArray = res.data.workSpaceDatas;
        setWorkSpaces(workSpaceArray);
    })

  }

  useEffect(()=>{
   getWorkSpaceDatas()
  },[])




  const [open, setOpen] = React.useState(false);
  const [openWorkspace, setOpenWorkspace] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleWorkspaceToggle = () => {
    setOpenWorkspace(!openWorkspace);
  };
    
  const handleOpen = () => setOpen(true);
  const handleClose = ()=> setOpen(false);
 
return (
    <div className='outer-div'>

    <Box sx={{ display: 'flex' }} >
      <CssBaseline />

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
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Pulse" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Todo" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding button onClick={handleWorkspaceToggle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Work Spaces" />
            {openWorkspace ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openWorkspace} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

  

            {/* <button   onClick={handleOpen} className='worskpace-add-button' >
                + New Space
            </button> */}
   
            <MountedModal getWorkSpaceDatas = { getWorkSpaceDatas } />



              {workSpaces.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
        <List>
          <ListItem disablePadding button onClick={handleToggle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="More options" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
          </Collapse>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
  

        <Toolbar />
      </Box>
    </Box>
    </div>
  );
}
