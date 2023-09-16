
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Login from '../pages/auth/Login';
import Signin from '../pages/auth/Signup';
import Home from '../pages/Home';




function Routing() {
  return (
   <>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>      
    </Routes>  
   </>
  );
}

export default Routing;
