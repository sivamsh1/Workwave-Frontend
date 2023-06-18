import * as React from "react";
import "./Todo.css";
import { Button, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { SideCalendar } from "../Calendar/Calendar";
import { Addmodal } from "../Add modal/Addmodal";
import { MyTodo } from "../MyTodo/MyTodo";
import { PersonalTasks } from "../PersonalTasks/PersonalTask";
import Snackbarmui from "../SnackBar/SnackBar";


export const Todo = () => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
 
  const handleChange = ()=>{

  }



  return (
    <div todo-body>
      <div className="header"></div>
      <hr />

      <div className="todo-innerbody">
        <div>
          {/* <h1 className="Todo">My Work</h1> */}

          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Tasks To do" />
            <Tab label="Pending" />
            <Tab label=" Completed " />

            

             <MyTodo/>
          </Tabs>

        <br />

        <div>
       <PersonalTasks/>      
        </div>

        
        </div>

        <div className="calender">
          <SideCalendar setDate={setDate} />

          <Addmodal date={date} />
        </div>
      </div>
    </div>
  );
};
