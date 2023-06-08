import React from "react";
import{BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import AdminLogin from "./Components/Admin/Auth/Adminlogin";
import adminHome from "./Components/Admin/Home/AdminHome";
import eLogin from "./Components/Employee/Auth/eLogin/eLogin";
import eRegister from "./Components/Employee/Auth/eRegister/eRegister";
import UserLogin from "./Components/User/Auth/Login/UserLogin";
import UserSignUp from "./Components/User/Auth/Signup/UserSignUp";
import Home from "./Components/User/Home/Home";

function App() {
  return <>

  
  <Router>
    <Routes>  
     <Route exact path = '/userSignup' Component = {UserSignUp} />
     <Route exact path = '/userLogin' Component = {UserLogin} />
     <Route exact path = '/eLogin' Component = {eLogin} />
     <Route exact path = '/eRegister' Component = {eRegister} />
     <Route exact path = '/admin/login' Component = {AdminLogin} />
     <Route exact path = '/home' Component = {Home} />
     <Route exact path = '/admin/home' Component = {adminHome} />
    </Routes>
  </Router>
  </>;
}

export default App;



