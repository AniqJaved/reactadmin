import React, { useState } from 'react'
import './userList.scss'
import {DataGrid,GridColDef} from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummydata';
import { Link } from "react-router-dom";


  
 
const UserList = () => {
  //Here we are bascially checking that if we click delete button then filter all the id which doesnot match
//the deleted one and just save them in data
const [data,setData] = useState(userRows);
const handleDelete = (id) =>{
  setData(data.filter((item)=> item.id !== id));
}


const columns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 90 
    },
    {
      field: 'user',
      headerName: 'User',
      width: 150,
      renderCell: (params) => {
        return (
            <div className="userListUser">
                <img src={params.row.avatar} alt="" className="userListImg" />
                {params.row.username}
            </div>
        )
      }      
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 110,
        editable: true,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 110,
        renderCell: (params) => {
          return(
              <>
                  <Link to={"/user/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </>
          )
        }
      }
  ];

  
  return (
    <div className='userList'>
        <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick/>
    </div>
  )
}

export default UserList