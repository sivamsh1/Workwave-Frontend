import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./MyTodo.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "../../../../Axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const style = {
  position: "absolute",
  top: "5%",
  left: "30%",
  transform: "translate(-50%, - 50%)",
  width: 650,
  bgcolor: "background.paper",
  p: 4,
  height: 550,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const MyTodo = () => {
  const [open, setOpen] = React.useState(false);
  const [errors, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSnackbarOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskDatas = {
      taskName,
      taskDetails,
      deadline,
    };

    axios.post("/user/add-personal-task", taskDatas).then((res) => {
      if (res.data.addPersonalTasks.status === 200) {
        handleClose();
        setSnackbarSeverity("success");
        setSnackbarMessage("Personal task added successfully!");
        setSnackbarOpen(true);
      } else {
        handleClose();
        setSnackbarSeverity("error");
        setSnackbarMessage("Failed to add personal task.");
        setSnackbarOpen(true);
      }
    });
  };

  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  return (
    <div>
      <Button variant="text" onClick={handleOpen}>
        + Add Personal Task{" "}
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
              <h3 className="modalHeading1">Add Your Personal tasks</h3>
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
                  Add{" "}
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};
