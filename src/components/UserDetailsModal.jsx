import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import axiosInstance from "../helpers/axiosInstance";

function UserDetailsModal({resetTable,clientName,userid,userEmail,userName,userstatus,userType}) {
   
    const [status,setStatus] = useState(userstatus);
    const [type,setUserType] = useState(userType);
    const [users,setUsers] = useState({});

    useEffect(()=>{
          setUsers({
            _id : userid,
            name : userName,
            email:userEmail,
            userType:userType,
            userStatus:userstatus,
            clearName:clientName
      });
    },[users.userStatus]);

  async function handleUsertype(e){  
    
        const {name} = e.target;
        
        const dropdown = document.getElementById("dropdown");
        const dropdown1 = document.getElementById("dropdown1");
        dropdown.open = !dropdown;
        dropdown1.open = !dropdown1;

        if(e.target.textContent == "admin" || e.target.textContent == "engineer" || e.target.textContent == "customer"){
          setUserType(e.target.textContent);
        }else{
          setStatus(e.target.textContent);
        }
        try {
          const response = await axiosInstance.patch("user/updateUser",{
            userId : userid ,
            updates : {
                ...users,
                [name] : e.target.textContent
            }
        }, {
          headers:{
            "x-access-token": localStorage.getItem('token')
        } 
       }
        );
        if(response?.data?.result){
          toast.success("updated user successfully");
          resetTable();
        }
        console.log(response,"reponse");
        } catch (error) {
          toast.success("something went wrong");
        }
        

       } 
  return (
   <>
  
               <div className="modal-box">
                 <h3 className="font-bold text-2xl underline text-center">User Data</h3>
                 <p className="py-4">Id : <span className=' text-yellow-200'>{users._is}</span></p>
                 <p className="py-4">Email : <span className=' text-yellow-200'>{users.email}</span></p>
                 <p className="py-4">Name : <span className=' text-yellow-200'>{users.name}</span></p>

                 <div className="flex flex-row justify-start gap-4">
                 <p className="py-4">UserStatus : <span className=' text-yellow-200'>
          
          <details className="dropdown" id="dropdown">
            <summary className="m-1 btn bg-[black] hover:border-white ">{status}</summary>
            <ul  value="approved"  onClick={(e)=>handleUsertype(e)} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li><a name ="userStatus">approved</a></li>
              <li><a name ="userStatus" >suspended</a></li>
              <li><a name ="userStatus">rejected</a></li>
            </ul>
         </details>
             
             </span></p>
          <p className="py-4">UserType : <span className=' text-yellow-200'>
          <details className="dropdown" id="dropdown1">
          <summary className="m-1 btn bg-[black] hover:border-white ">{type}</summary>
          <ul name = "userType" onClick={(e)=>handleUsertype(e)} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li><a name="userType">engineer</a></li>
              <li><a name="userType">customer</a></li>
              <li><a name="userType">admin</a></li>
          </ul>
       </details>
             
           
           </span></p>
                 </div>
                 
                 <div className="modal-action">
                   <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                   </form>
                 </div>
               </div>

   </>
  );
}

export default UserDetailsModal;
