

import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

import UserDetailsModal from '../../components/UserDetailsModal';
import axiosInstance from '../../helpers/axiosInstance';
import Homelayout from '../../layouts/Homelayout';

function ListAllUsers() {

    const [userlist , setuserlist] = useState([]);
    const [userData,setUserData] = useState({
        id:"",
        email:"",
        name:"",
        userStatus:"",
        userType:"",
        clientName : ""
    });

    useEffect(()=>{
           loadusers();
    },[]);

  async function loadusers(){
          const response = await axiosInstance.get("/users",
          {
             headers:{
             "x-access-token": localStorage.getItem('token')
         }
     }
          );
          console.log(response);
          setuserlist(response.data.result);
    }

    // preparing of columns

    
const columns = [
    {
        name: 'User id',
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
    },
    {
        name: 'Type',
        selector: row => row.userType,
    },
];

  return (
    <>
    <Homelayout>
        <div className=' mt-6 mb-6'>
            <p className='text-center text-5xl underline mb-6'>List of all users</p>
           <DataTable
            showLabel={true}
            onRowClicked={(item)=>{
                document.getElementById('my_modal_1').showModal();
            console.log(item);
            setUserData({ ...userData,
                _id:item._id,
               email : item.email,
               name : item.name,
               userStatus : item.userStatus,
               userType : item.userType,
               clientName : item.clientName
            });
            }
            }
            columns={columns}
            data={userlist}
          />
           
        </div>   

          <UserDetailsModal resetTable={loadusers} key={userData._id} clientName = {userData.clientName} userid = {userData._id} userEmail = {userData.email} userName = { userData.name} userstatus={userData.userStatus} userType={userData.userType}   />
       <Link to="/home"><p className='text-center mb-4 underline cursor-pointer'>Go back</p></Link> 
    </Homelayout>
    
    </>
  );
}

export default ListAllUsers;
