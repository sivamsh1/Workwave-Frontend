
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./MountedModal.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "../../../../Axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const style = {
  position: "absolute",
  top: "20%",
  left: "30%",
  transform: "translate(-50%, - 50%)",
  width: 650,
  bgcolor: "background.paper",
  p: 4,
  height: 400,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MountedModal({ getWorkSpaceDatas }) {
  const [open, setOpen] = React.useState(false);
  const [errors, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const [workSpace, setWorkSpace] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const WorkSpace = {
      workSpace,
    };

    axios.post("/user/create-workspace", WorkSpace).then((res) => {
      if (res.data.workSpaceData.status === 200) {
        handleClose();
        getWorkSpaceDatas();
      } else {
        setError(res.data.workSpaceData.message);
      }
    });
  };

  return (
    <div>
      <button onClick={handleOpen} className="workspace-add-button">
        + New Space
      </button>
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
    <div className="image"  ></div>
    <div className="top-div">
   
      <h3 className="modalHeading1">Create new space</h3>
    </div>
    <hr />
    <div className="bottom-div">
    
      <span></span>  <br />
<form onSubmit={handleSubmit} >
      <TextField onChange={(e)=>{setWorkSpace(e.target.value) } } id="standard-basic" label="Enter Workspace name" variant="standard" className="modal-input"  /> <br /> <br />
      <p className="error-message" >{errors}</p>
      <button  type="submit" className="modal-button"  > Create </button>
</form>
    </div>
  </div>
</Box>
</Modal>

      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          Workspace added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MountedModal;
