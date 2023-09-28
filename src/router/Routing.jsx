
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Login from '../pages/auth/Login';
import Signin from '../pages/auth/Signup';
import CreateTicket from '../pages/CreateTicket';
import Home from '../pages/Home';
import ListAllUsers from '../pages/users/ListAllUsers';
import AuthRoutes from './AuthRoutes';

function Routing() {
  return (
   <>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>     
        <Route element={<AuthRoutes allowListedRoles={["admin"]} />}>
                <Route path="/users" element={<ListAllUsers />} />
            </Route>
         <Route path='/createticket' element={<CreateTicket/>} />

    </Routes>  
   </>
  );
}

export default Routing;
