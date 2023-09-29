import { useEffect, useState } from "react";

function UserDetailsModal({userId,userEmail,userName,userStatus,userType}) {
   
    const [status,setStatus] = useState("");
    useEffect(()=>{
          setStatus(userStatus);
    },[userId]);
    function handleUsertype(e){    
        setStatus(e.target.textContent);     
        const dropdown = document.getElementById("dropdown");
        dropdown.open = false;
       } 
  return (
   <>
     <dialog id="my_modal_1" className="modal">
               <div className="modal-box">
                 <h3 className="font-bold text-2xl underline text-center">User Data</h3>
                 <p className="py-4">Id : <span className=' text-yellow-200'>{userId}</span></p>
                 <p className="py-4">Email : <span className=' text-yellow-200'>{userEmail}</span></p>
                 <p className="py-4">Name : <span className=' text-yellow-200'>{userName}</span></p>
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
