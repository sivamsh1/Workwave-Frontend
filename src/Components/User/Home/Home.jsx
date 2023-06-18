import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "../Home/Home.css";
import { useEffect } from "react";
import axios from "../../../Axios";
import { useState } from "react";
import MountedModal from "./MountedModal/MountedModal";
import { Todo } from "./Todo/Todo";
import { Button } from "@mui/material";
import WorkSpace from "./WorkSpace/WorkSpace";
const drawerWidth = 298;

export default function Home({ children }) {
  const [workSpaces, setWorkSpaces] = useState([]);
  const [workSpaceTasks,setWorkSpaceTasks] = useState([]);
  const getWorkSpaceDatas = () => {
    axios.post("/user/get-workspaces").then((res) => {
      const workSpaceArray = res.data.workSpaceDatas;
      setWorkSpaces(workSpaceArray);
    });
  };

  useEffect(() => {
    getWorkSpaceDatas();
  }, []);

  const [open, setOpen] = useState(false);
  const [openWorkspace, setOpenWorkspace] = useState(false);
  const [employee,setEmployee] = useState([])

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleWorkspaceToggle = () => {
    setOpenWorkspace(!openWorkspace);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [homeOpen, setHomeOpen] = useState(false);
  const [workSpaceOpen,setWorkSpaceOpen ] = useState(false);

  const handleClick = (route) => {
    if (route === "Home") {
      setHomeOpen(true);
      setWorkSpaceOpen(false);
    } else if (route === "Notification") {
    } else if (route === "Pulse") {
    }
  };

  const workSpaceClick = (workSpace) => {
    const workSpaceData = {
      name: workSpace,
    };

    axios.post("/user/fetch-workSpace-data", workSpaceData).then((res) => {
      const tasks = res.data.workSpaceData.tasks

      const  employees =  res.data.workSpaceData.employees;

      setEmployee(employees);

      setWorkSpaceTasks(tasks);
      setHomeOpen(false);
      setWorkSpaceOpen(true);
    });
  };

  return (
    <div className="outer-div">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
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
                <ListItemText
                  primary="Home"
                  onClick={() => handleClick("Home")}
                />
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Notification"
                  onClick={() => handleClick("Notification")}
                />
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Pulse"
                  onClick={() => handleClick("Pulse")}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          {/* <br /> */}
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
                <MountedModal getWorkSpaceDatas={getWorkSpaceDatas} />

                {workSpaces.map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        onClick={() => workSpaceClick(text.name)}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
          <br />
          <Divider />
          <br />

          <Button variant="contained">Logout</Button>
        </Drawer>


        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          {homeOpen && <Todo />}
          { workSpaceOpen && <WorkSpace tasks= {workSpaceTasks} employees = {employee}  />}

           
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}
