

import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

import UserDetailsModal from '../../components/UserDetailsModal';
import axiosInstance from '../../helpers/axiosInstance';
import Homelayout from '../../layouts/Homelayout';

function ListAllUsers() {

    const [userList , setUserList] = useState([]);
    const [userData,setUserData] = useState({
        id:"",
        email:"",
        name:"",
        status:"",
        type:""
    });

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
            <p className='text-center text-5xl underline mb-6'>List of all users</p>
           <DataTable
            onRowClicked={(item)=>{
                document.getElementById('my_modal_1').showModal();
            console.log(item);
            setUserData({
                id:item._id,
               email : item.email,
               name : item.name,
               status : item.userStatus,
               type : item.userType
            });
            }
            }
            columns={columns}
            data={userList}
          />
           
        </div>   

          <UserDetailsModal userId = {userData.id} userEmail = {userData.email} userName = { userData.name} userStatus={userData.status} userType={userData.type}   />
       <Link to="/home"><p className='text-center mb-4 underline cursor-pointer'>Go back</p></Link> 
    </Homelayout>
    
    </>
  );
}

export default ListAllUsers;
