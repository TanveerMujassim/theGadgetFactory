import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {  Person, 
  // ShoppingBasket
 } from "@mui/icons-material";
//import { Link } from 'react-router-dom';

const NavBar = () => {

  const [user, setUser] = useState(true)
  // check local storage for user id
  // if user id found, fetch user from db
  //


  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Gadget Factory
          </Typography>
          <Button variant="contained" href="./ProductList">
            Products
          </Button>
          
          <Button variant="contained" href="./Checkout">
        Cart
      </Button>
      {user ? 
          <Button variant="contained" href="./SignIn" color="success">
            Sign In
          </Button>:
          <Button variant="contained" href="./SignUp" startIcon={<Person />}>
            Sign Up
          </Button>
      }
        </Toolbar>
      </AppBar>
  );
};

export default NavBar;
