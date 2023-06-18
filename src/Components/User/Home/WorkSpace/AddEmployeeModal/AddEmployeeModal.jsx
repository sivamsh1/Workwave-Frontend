
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./AddEmployeeModal.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "../../../../../Axios";
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

function AddEmployeeModal({workSpace}) {
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

  const [email,setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   
    workSpace = workSpace.toLowerCase()

    const data = {
      email,
      workSpace,
    };

  
    axios.post("/user/add-employee", data).then((res) => {


      console.log(res.data.addEmployeesData,"dataa")

      if (res.data.addEmployeesData.status === 200) {
        setSnackbarOpen(true); 
        handleClose();
      } else {
        setError(res.data.workSpaceData.message);
      }
    });
  };
  

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">+ Add employee to workSpace</Button>

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
   
      <h3 className="modalHeading1">ADD EMPLOYEEE...</h3>
    </div>
    <hr />
    <div className="bottom-div">
    
      <span></span>  <br />
<form onSubmit={handleSubmit} >
      <TextField onChange={(e)=>{setEmail(e.target.value) } } id="standard-basic" label="Enter email address" variant="standard" className="modal-input" type="email" required /> <br /> <br />
      <p className="error-message" >{errors}</p>
      <button  type="submit" className="modal-button"  > ADD </button>
</form>
    </div>
  </div>
</Box>
</Modal>

      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
        Invitation email has been successfully sent to the provided email address.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AddEmployeeModal;
