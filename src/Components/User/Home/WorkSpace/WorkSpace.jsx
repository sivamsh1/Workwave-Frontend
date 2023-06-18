import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import './WorkSpace.css';
import AddEmployeeModal from './AddEmployeeModal/AddEmployeeModal';
import { Person } from '@mui/icons-material';
import SimpleDialogDemo from './SimpleDialog/SimpleDialog';

function WorkSpace({ tasks,employees }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  

  const handlePersonClick = (task) => {

    setSelectedTask(task);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAssign = ()=>{
     
  }

  const Tasks = tasks;
  let workSpaceName = Tasks[0].workSpaceName;
  workSpaceName = workSpaceName.toUpperCase();

  return (
    <>
      <div>
        <h1>{workSpaceName}</h1>
      </div>
      <hr />
      <AddEmployeeModal workSpace={workSpaceName} />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          overflow: 'auto',
          maxHeight: '550px',
          scrollbarWidth: 'thin',
          scrollbarColor: 'transparent transparent',
          marginTop: '3rem',
        }}
      >
        <br />
        {Tasks.map((task) => (
          <Card
            key={task.id}
            style={{
              width: '80%',
              height: 'auto',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                {task.taskName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.taskDetails}
              </Typography>
            </CardContent>
            <Person
              color="primary"
              onClick={() => handlePersonClick(task)}
            />
          </Card>
        ))}
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle> Assign To an employee </DialogTitle>
        <DialogContent>
          {selectedTask && (
            <>
            
              <FormControl style={{ marginTop: '1rem',width:'12rem' }}>
                <InputLabel id="select-label">Select an option</InputLabel>
                <Select
                  labelId="select-label"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  fullWidth
                >

                      {employees.map((employee) => (
                        <MenuItem key={employee} value={employee}>
                          {employee}
                        </MenuItem>
                      ))}
                 
               
                </Select>
              </FormControl>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleAssign} color="primary">
            Assign
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default WorkSpace;
