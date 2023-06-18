import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "../../../Axios";
import "./BlockModal.css";
import { useCallback } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#ffffff",
  border: "none",
  borderRadius: 6,
  outline: "none",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export function BlockModal({ userId,isBlocked,getData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [workSpace, setWorkSpace] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const user = {
    userId: userId,
  };

  const buttonSubmit =  useCallback( () => {

    axios.post("/admin/block-user", user).then((res) => {

      getData();
      handleClose();
    });

  },[getData]);

  const unBlock = useCallback(() => {
    axios.post("/admin/unblock-user", user).then((res) => {
      getData();
      handleClose();
    });
  }, [getData]);



  return (
   <div>
     
     {isBlocked ?( <Button onClick={unBlock} variant="contained" color="primary" className="block-button" >
   Unblock
 </Button>
     ):(
      
      <Button onClick={handleOpen} variant="contained" color="secondary" className="block-button" >
        Block
      </Button>
   )}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <button className="close-button" onClick={handleClose}>
            X
          </button>
          <div className="modal-content">
            <h2>Are You Sure?</h2>
            <Button variant="contained" color="primary" onClick={buttonSubmit}>
              Yes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
