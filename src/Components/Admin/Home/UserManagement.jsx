import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './UserTable.css'
import { BlockModal } from './BlockModal';
import axios from '../../../Axios';
import { useEffect } from 'react';
import { useState } from 'react';




export default function UserManagement() {


  const [rows, setRows] = useState([]);
  
  let users = [];
    const getData = () => { 
      axios.post("/admin/user-datas").then((res) => {
        users = res.data.usersDetails;
   
     console.log(users,"users");

        const rows = users.map((users,index)=>{
              return  { ...users, id:index+1};
          })
          setRows(rows);
      });

    };


  useEffect(()=>{
    getData();
    
  },[]);




  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone Number', width: 200 },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
           <BlockModal userId = {params.row._id} isBlocked = {params.row.isBlocked} getData = { getData} />
      ),
    },
   
  ];


 

  

  return (
    <div className='table-div'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
