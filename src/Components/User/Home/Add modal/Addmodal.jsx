
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../Add modal/Addmodal.css";
import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import axios from "../../../../Axios";
import { useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const style = {
  position: "absolute",
  top: "5%",
  left: "30%",
  transform: "translate(-50%, - 50%)",
  width: 650,
  bgcolor: "background.paper",
  p: 4,
  height: 600,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Addmodal = () => {
  const [open, setOpen] = React.useState(false);
  const [errors, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    getWorkSpaceDatas();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const [workSpace, setWorkSpace] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const taskDatas = {
      taskName,
      taskDetails,
      workSpaceName,
      deadline,
    };

    axios.post("/user/add-task", taskDatas).then((res) => {
      if (res.data.addTask.status === 200) {
        handleClose();
        setSnackbarOpen(true);
      } else {
        handleClose();
      }
    });
  };

  const [workSpaces, setWorkSpaces] = useState([]);
  const [workSpaceName, setWorkSpaceName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  const getWorkSpaceDatas = () => {
    axios.post("/user/get-workspaces").then((res) => {
      const workSpaceArray = res.data.workSpaceDatas;
      setWorkSpaces(workSpaceArray);
    });
  };

  useEffect(() => {
    getWorkSpaceDatas();
  }, []);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        + Add tasks to workspace
      </Button>
      <Modal
keepMounted
open={open}
onClose={handleClose}
aria-labelledby="keep-mounted-modal-title"
aria-describedby="keep-mounted-modal-description"
>
<Box sx={style}>

  <div className="close-button-container">
    <button className="close-button" onClick={handleClose}>
      X
    </button>
  </div>
  <div className="outer-div">
    <div className="image"></div>
    <div className="top-div">
      <h3 className="modalHeading1">Add task to workspace </h3>
    </div>
    <hr />
    <div className="bottom-div">
      <span></span> <br />
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          id="standard-basic"
          label="Enter Task Name "
          variant="standard"
          className="modal-input"
        />{" "}
        <br /> <br />
        <TextField
          onChange={(e) => {
            setTaskDetails(e.target.value);
          }}
          id="standard-basic"
          label="Enter Task Details"
          variant="standard"
          className="modal-input"
        />{" "}
        <br /> <br />
        <TextField
          select
          value={workSpaceName}
          onChange={(e) => setWorkSpaceName(e.target.value)}
          label="Select WorkSpace"
          variant="standard"
          className="modal-input"
        >
          {workSpaces.map((workSpaces) => (    
            <MenuItem   key={workSpaces.name} value={workSpaces.name}>
              {workSpaces.name}
            </MenuItem>
          ))}
        </TextField>{" "}
        <br />
        <br />

        <TextField
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
          type="date"
          label="Dead Line"
          variant="standard"
          className="modal-input"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            style: { fontSize: 16 }, // adjust the font size here
          }}
        />

        <br /> <br />
        <p className="error-message">{errors}</p>
        <button type="submit" className="modal-button">
          {" "}
          Add  {" "}
        </button>
      </form>
    </div>
  </div>
</Box>
</Modal>

      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          Task added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};
