import React, { useState } from "react";
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
import UserManagement from "./userManagement";
import { Grid } from "@mui/material";
import WorkspaceManagement from "./WorkspaceManagement";
import EmployeeManagement from "./EmployeeManagement";

const drawerWidth = 298;

export default function AdminSidebar({ children }) {
  const [open, setOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);
  const [workSpaceOpen, setWorkspaceOpen] = useState(false);
  const [openWorkspace, setOpenWorkspace] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    setEmployeeOpen(false);
    setWorkspaceOpen(false);
  };

  const handleWorkspaceToggle = () => {
    setOpenWorkspace(!openWorkspace);
    setOpen(false);
    setEmployeeOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleItemClick = (route) => {
    // Handle the item click event
    if (route === "users") {
      setOpen(true);
      setEmployeeOpen(false);
      setWorkspaceOpen(false);
    } else if (route === "employee") {
      setOpen(false);
      setWorkspaceOpen(false);
      setEmployeeOpen(true);
    } else if (route === "workspace") {
      setOpen(false);
      setEmployeeOpen(false);
      setWorkspaceOpen(true);
    }
    // Add more conditions for other menu items if needed
  };

  return (
    <div className="outer-div">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} sm={4} md={3} lg={2}>
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
                  <ListItemButton onClick={() => handleItemClick("dashboard")}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <Divider />

                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleItemClick("users")}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                  </ListItemButton>
                </ListItem>
                <Divider />

                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleItemClick("employee")}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Employees" />
                  </ListItemButton>
                </ListItem>
                <Divider />

                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleItemClick("workspace")}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Workspace" />
                  </ListItemButton>
                </ListItem>
                <Divider />

                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleItemClick("payment")}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Payment" />
                  </ListItemButton>
                </ListItem>
                <Divider />

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary=" Tasks " />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </List>
            </Drawer>
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
              <Toolbar />
              {open && <UserManagement />}
              {employeeOpen && <EmployeeManagement />}
              {workSpaceOpen && <WorkspaceManagement />}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
