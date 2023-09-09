import { useState } from "react";
import {useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../../Redux/slice/AuthSlice";

function Signup() {

  
  const navigate = useNavigate();
  const [userType,setUsertype] = useState("userType");  
   
 const dispatch = useDispatch();

 const [signupDetails,setSignupdetails] = useState({
  email : "",
  password : "",
  name : "",
  usertypes : "",
  userStatus : "",
  clientName : ""
 });

 function nameChange(value){
  setSignupdetails({
    ...signupDetails , name : value
  });
 }

 function emailChange(value){
  setSignupdetails({
    ...signupDetails , email : value
  });
 }


 function passwordChange(value){
  setSignupdetails({
    ...signupDetails , password : value
  });
 }



 function resetSignupState(){
     setSignupdetails({
      email : "",
      password : "",
      name : "",
      usertypes : "",
      userStatus : "",
      clientName : ""
     });
 }

 async function onSubmit (){
  setSignupdetails({
    ...signupDetails ,  userStatus: (userType === "Customer") ? "approved" : "suspended" 
  });
  console.log(signupDetails);
  
   if(!signupDetails.email ||
     !signupDetails.password || 
     !signupDetails.userStatus || 
     !signupDetails.usertypes || 
     !signupDetails.name ||
     !signupDetails.clientName
     ) return;
     console.log("inside onsubmit");
  const response = await dispatch(signup(signupDetails));
  console.log(response,"response");

 if(response.payload){
          navigate("/login");
 }else{
  resetSignupState();
 }
}

function handleUsertype(e){

 const value = e.target.textContent;
 console.log(value);
 
 setSignupdetails({   
  ...signupDetails , usertypes : value
   });

 
 setUsertype(value);
  
 const dropdown = document.getElementById("dropdown");
 dropdown.open = false;
} 

function clientNamechange(value){
  setSignupdetails({   
    ...signupDetails , clientName : value
     });
}

  return (
   <>
    <div className='flex justify-center w-full h-[95vh] items-center'> 
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="flex justify-center card-title text-4xl mb-4">Signup</h2>
            
            <input type="text"
             placeholder="name" 
             className="input input-bordered w-full max-w-xs" 
             onChange={(e)=>nameChange(e.target.value)}
             />
            
            <input type="email"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
              onChange={(e)=>emailChange(e.target.value)}
              value={signupDetails.email} 
              name="password"
              />
            
            <input type="password" 
              placeholder="password" 
              className="input input-bordered w-full max-w-xs" 
              onChange={(e)=>passwordChange(e.target.value)}
              value={signupDetails.password}
              name="email"
              />
            
              <details className="dropdown" id="dropdown">
                 <summary className="m-1 btn bg-[black] ">{userType}</summary>
                 <ul onClick={(e)=>handleUsertype(e)} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                     <li><a>Customer</a></li>
                     <li><a>Engineer</a></li>
                     <li><a>Admin</a></li>
                 </ul>
              </details>
          
            <input type="text" 
              placeholder="client name" 
              className="input input-bordered w-full max-w-xs" 
              value={signupDetails.clientName}
              name="clientName"
              onChange={(e)=>clientNamechange(e.target.value)}
              />

            <div className="flex justify-center card-actions justify-end">
            <button className="btn btn-active btn-accent mt-4" onClick={()=>onSubmit()}>Submit</button>
            <p className="ml-6">
              Already have an account? 
              <Link className="link link-warning" to="/login" > login instead </Link>
            </p>
            </div>
          </div>
        </div>
      </div>  
   </>
  );
}

export default Signup;



// {
// "name": "xyz",
// "password": "$2b$11$bz7E05RVBbdYp87OPaoRueCEjj3PeYXbjrg.KT8WbokNBCZi1f7tW",
// "email": "abhishek@gmail.com",
// "clientName": "sanket",
// "userType": "customer",
// "userStatus": "approved",
// "ticketsCreated": [],
// "ticketsAssigned": [],
// "_id": "64f97714840f26f2c8628c09",
// "createdAt": "2023-09-07T07:09:08.403Z",
// "updatedAt": "2023-09-07T07:09:08.403Z",
// "__v": 0
// }