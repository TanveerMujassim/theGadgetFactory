import React from 'react';
//import { Switch,  Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import Index from './Index';
import Index from './index.jsx';
import SignIn from './sign_in';
import SignUp from './sign_up';
import ForgotPasswordPage from './forget_password';
import ProductDetail from './productdetail';
import Checkout from './checkout';
import ProductList from './ProductList';

const Routers = () => {
  return (
    <Routes>
     <Route exact path="/" Component={Index}/>
     <Route exact path="/SignIn" Component={SignIn}/>
     <Route exact path="/SignUp" Component={SignUp}/>
     <Route exact path="/ForgotPasswordPage" Component={ForgotPasswordPage}/>
     <Route exact path="/Checkout" Component={Checkout}/>
     <Route exact path="/ProductDetail/:id" Component={ProductDetail}/>
     <Route exact path="/ProductList" Component={ProductList}/>
     </Routes>

  )
}

export default Routers