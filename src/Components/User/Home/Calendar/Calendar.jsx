import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';

const today = dayjs();


  export const SideCalendar = ({setDate})=> {

const onChange = (date)=>{
  
setDate(date.$d);

}

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid
      
      >
        <Grid item>
          <DateCalendar onChange={onChange}  defaultValue={today}  />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}