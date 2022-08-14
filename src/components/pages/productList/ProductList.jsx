import React, { useState } from 'react'
import './productList.scss'
import {DataGrid,GridColDef} from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummydata';
import { Link } from "react-router-dom";

export default function ProductList() {
    //Here we are bascially checking that if we click delete button then filter all the id which doesnot match
    //the deleted one and just save them in data
    const [data,setData] = useState(productRows);
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
      field: 'product',
      headerName: 'Product',
      width: 150,
      renderCell: (params) => {
        return (
            <div className="productListItem">
                <img src={params.row.img} alt="" className="productListImg" />
                {params.row.name}
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
      field: 'price',
      headerName: 'Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
        field: 'stock',
        headerName: 'Stock',
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
                  <Link to={"/product/"+params.row.id}>
                    <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </>
          )
        }
      }
  ];
  return (
    <>
    <div className="productList">
        <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick/>
    </div>
    </>
  )
}
