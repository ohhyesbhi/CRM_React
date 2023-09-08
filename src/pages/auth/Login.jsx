import { useState } from "react";
import {useDispatch} from "react-redux";

import { login } from "../../Redux/slice/AuthSlice";

function Login() {

 const dispatch = useDispatch();
 const [loginDetails,setLogindetails] = useState({
  email : "",
  password : ""
 });

 function emailChange(value){
  setLogindetails({
    ...loginDetails , email : value
  });
 }


 function passwordChange(value){
  setLogindetails({
    ...loginDetails , password : value
  });
 }

 async function onSubmit (){
   if(!loginDetails.email || !loginDetails.password) return;
  const response = await dispatch(login(loginDetails));
  console.log(response);

 }
  return (
    <>
      <div className='flex justify-center w-full h-[95vh] items-center'> 
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="flex justify-center card-title text-4xl mb-4">Login</h2>
            <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs" onChange={(e)=>emailChange(e.target.value)} />
            <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" onChange={(e)=>passwordChange(e.target.value)}/>
    
            <div className="flex justify-center card-actions justify-end">
            <button className="btn btn-active btn-accent mt-4" onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Login;
