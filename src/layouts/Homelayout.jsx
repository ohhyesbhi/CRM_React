
import { useEffect } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../Redux/slice/AuthSlice";


function Homelayout({children}) {

    const dispatch = useDispatch();
    const navigator = useNavigate();
    const authState = useSelector((state)=>state.auth);

    function sidebarCheck(){
      const sidebar = document.getElementById("my-drawer");
      sidebar.checked = false; 
    }

    function onLogout(){
      dispatch(logout());
      navigator("/login");
    }


    useEffect(()=>{
     if(!authState.isLoggedIn) navigator("/login");
    },[]);

  return (
 <>
 <div className="min-h-[90vh]">
    <div className="drawer absolute">
         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content">
           {/* Page content here */}
           <label htmlFor="my-drawer" className="drawer-button">
             <BsFillMenuButtonWideFill className="ml-4 mt-5 w-6 h-6 cursor-pointer"/>
           </label>
         </div> 
         <div className="drawer-side">
           <label htmlFor="my-drawer" className="drawer-overlay"></label>
                  <ul onClick={sidebarCheck} className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                       {/* Sidebar content here */}
                       <li><a>View all tickets</a></li>
                       <li><Link to={"/dashboard"}>Dashboard</Link></li>

                       <div className=" flex absolute bottom-8 w-full">
                        <div className="flex flex-row justify-center gap-4 w-4/5 ">
                            {
                                !authState.isLoggedIn ? (
                                    <>
                                      <Link to="/login"><button className="btn btn-primary ">Login</button></Link>
                                      <Link to="/"><button className="btn btn-secondary ">Signup</button></Link>
                                    </>
                                )
                                :
                                (
                                    <>
                                      <button className="btn btn-primary" onClick={()=>onLogout()}>Logout</button>
                                      <button className="btn btn-secondary ">Profile  </button>
                                    </>
                                )
                            }
                          
                        </div>
                       </div>
                  </ul>
         </div>
         
   </div>
  <div className="flex justify-center items-start">
    <div className="w-3/4">
     {children}
    </div>
  </div>
</div>
 </>
  );
}

export default Homelayout;
