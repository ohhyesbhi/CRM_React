
import { Route, Routes } from 'react-router-dom';

import Login from '../pages/auth/Login';
import Signin from '../pages/auth/Signup';
import Home from '../pages/Home';

function Routing() {
  return (
   <>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
    </Routes>
   </>
  );
}

export default Routing;
