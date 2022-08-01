import React from 'react'
import './userList.scss'
import {DataGrid,GridColDef} from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';



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
                  <button className="userListEdit">Edit</button>
                  <DeleteOutline className="userListDelete"/>
              </>
          )
        }
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 110,
        editable: true,
      }
  ];
  
  const rows = [
    { id: 1, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Snow',  email: 35  },
    { id: 2, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Lannister',  email: 42 },
    { id: 3, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Lannister',  email: 45 },
    { id: 4, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Stark',  email: 16 },
    { id: 5, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Targaryen',  email: null },
    { id: 6, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Melisandre',  email: 150 },
    { id: 7, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Clifford',  email: 44 },
    { id: 8, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Frances',  email: 36 },
    { id: 9, status: "active", avatar:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=800" , transaction: "$120.00",  username: 'Roxie',  email: 65 },
  ];
const UserList = () => {
  return (
    <div className='userList'>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick/>
    </div>
  )
}

export default UserList