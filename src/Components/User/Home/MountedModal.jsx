import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../Home/MountedModal.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "../../../Axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, - 50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 6, // Rounded border
  boxShadow: 24,
  p: 4,
  height:400,
};

function MountedModal( {getWorkSpaceDatas} ) {
  const [open, setOpen] = React.useState(false);
  const [errors,setError] = useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [workSpace,setWorkSpace] = useState('')

  const  handleSubmit=(event)=>{
    event.preventDefault();

    const WorkSpace = {
      workSpace
    }

     axios.post('/user/create-workspace', WorkSpace ).then((res)=>{

      if(res.data.workSpaceData.status === 200){
        handleClose();
        getWorkSpaceDatas();
      }else{
          setError(res.data.workSpaceData.message)
      }
       

     })
  }

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
           
              <h3 className="modalHeading">Create new space</h3>
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
    </div>
  );
}

export default MountedModal;
