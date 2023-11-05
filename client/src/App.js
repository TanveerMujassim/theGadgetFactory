//import logo from './logo.svg';
import './App.css';
// import Heading from './heading';
// import Nav from './nav';
// import Home from './Home';
//import Index from './pages/index';
//import SignUp from './pages/sign_up';
//import SignIn from './pages/sign_in';
//import Forget_password from './pages/forget_password'; 
//import ForgotPasswordPage from './pages/forget_password';
//import { TextField, Button, Grid, backdropClasses } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Routers";
function App() {
  return (
  //   <div className="App">
  //     {/* <Nav />
  //     <Heading mainHeading={"gadget factory"}/>
  //     <Home /> */}
  //     {/* <Index/>
  //     <SignUp/>
  //     <SignIn/>
  //     <ForgotPasswordPage/> */}
  //     {/* <Grid container spacing={2}>
  // <Grid item xs={12}>
  // <TextField id="outlined-basic" label="email" type='email' variant="filled" />
  // </Grid>
  // <Grid item xs={12}>
  // <TextField id="outlined-basic" label="password" type='password' variant="filled" />
  // </Grid>
  // <Grid item xs={12}>
  //   <Button variant="contained" sx={{backgroundColor:'red', width:'200px'}}>Contained</Button>
  // </Grid>
  //     </Grid> */}
  //   </div>
  <Router>
    <div>
      <Routes />
    </div>
  </Router>
  );
}

export default App;
