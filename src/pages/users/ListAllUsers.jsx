

import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import axiosInstance from '../../helpers/axiosInstance';
import Homelayout from '../../layouts/Homelayout';

function ListAllUsers() {

    const [userList , setUserList] = useState([]);

    useEffect(()=>{
           loadUsers();
    },[]);

  async function loadUsers(){
         const response = await axiosInstance.get("/users",
         {
            headers:{
            "x-access-token": localStorage.getItem('token')
        }
    }
         );
         setUserList(response.data.result);
    }

    // preparing of columns

    
const columns = [
    {
        name: 'User Id',
        selector: row => row._id,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Status',
        selector: row => row.userStatus,
        sortable:true,
    },
    {
        name: 'Type',
        selector: row => row.userType,
        sortable:true,
        reorder : true
    },
];

  return (
    <>
    <Homelayout>
        <div className=' mt-6 mb-6'>
           <DataTable
            columns={columns}
            data={userList}
          />
        </div>   
    </Homelayout>
    
    </>
  );
}

export default ListAllUsers;
