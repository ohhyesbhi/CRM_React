import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import axiosInstance from "../helpers/axiosInstance";

function UserDetailsModal({resetTable,clientName,userid,userEmail,userName,userstatus,userType}) {
   
    const [status,setStatus] = useState(userstatus);
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
        setStatus(e.target.textContent);
        const dropdown = document.getElementById("dropdown");
        dropdown.open = false;

        try {
          const response = await axiosInstance.patch("user/updateUser",{
            userId : userid ,
            updates : {
                ...users,
                userStatus : e.target.textContent
            }
        }, {
          headers:{
            "x-access-token": localStorage.getItem('token')
        } 
       }
        );
        if(response?.data?.result){
          toast.success("updated status successfully");
          resetTable();
        }
        console.log(response,"reponse");
        } catch (error) {
          console.log(error);
        }
        

       } 
  return (
   <>
     <dialog id="my_modal_1" className="modal">
               <div className="modal-box">
                 <h3 className="font-bold text-2xl underline text-center">User Data</h3>
                 <p className="py-4">Id : <span className=' text-yellow-200'>{users._is}</span></p>
                 <p className="py-4">Email : <span className=' text-yellow-200'>{users.email}</span></p>
                 <p className="py-4">Name : <span className=' text-yellow-200'>{users.name}</span></p>
                 <p className="py-4">UserStatus : <span className=' text-yellow-200'>
                
                    <details className="dropdown" id="dropdown">
                 <summary className="m-1 btn bg-[black] hover:border-white ">{status}</summary>
                 <ul onClick={(e)=>handleUsertype(e)} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                     <li><a>approved</a></li>
                     <li><a>suspended</a></li>
                     <li><a>rejected</a></li>
                 </ul>
              </details>
                    
                    </span></p>
                 <p className="py-4">UserType : <span className=' text-yellow-200'>{userType}</span></p>
                 <div className="modal-action">
                   <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn btn-success">Close</button>
                   </form>
                 </div>
               </div>
             </dialog>
   </>
  );
}

export default UserDetailsModal;
