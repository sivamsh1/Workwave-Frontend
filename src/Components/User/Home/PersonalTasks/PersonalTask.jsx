import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import axios from '../../../../Axios';



export const PersonalTasks = () => {

  const [tasks,setTasks] = useState([])


  const getPersonalTasks = ()=>{

    console.log("okokoko")

axios.post('/user/get-personal-tasks').then((res)=>{

  const task = res.data.tasks

  setTasks(task);
  
})

  }

  useState(()=>{
    getPersonalTasks()
  },[])



  return (

    <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      overflow: 'auto',
      maxHeight: '450px',
      scrollbarWidth: 'thin', // Set the width of the scrollbar
      scrollbarColor: 'transparent transparent', // Set the color of the scrollbar
    }}
    >
      {tasks.map((task) => (
       <Card
       key={task.id}
       style={{
         flex: '0 0 50%',
         maxWidth: '20rem',
         marginBottom: '32px' // Increase the value here
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
        </Card>
      ))}
    </div>
  );
};