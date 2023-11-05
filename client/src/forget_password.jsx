//email,reset password
// import React from 'react'

// const Forget_password = () => {
//   return (
//     <div>Faaaaa</div>
//   )
// }

// export default Forget_password
import React, { useState } from 'react';
import {  Container, Paper, TextField, Button, Typography} from '@mui/material';
import NavBar from './navBar';
//import backgroundImage from './public./image./background.jpg'; // Replace with the path to your background image

// const styles = {
//   container: {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   paper: {
//     padding: '20px',
//     maxWidth: '400px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   },
// };
function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your logic for sending a password reset email here
    // Typically, you would send a request to your server to handle the email sending process
    // For demonstration purposes, we'll show a success message
    setMessage('Password reset email sent to ' + email);
  };

  return (
    <div>
      <NavBar/>
    
    <Container maxWidth="sm"
    >
      
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h3" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField  type="email"  label="Email"  fullWidth  margin="normal"  variant="outlined"  value={email}  onChange={handleEmailChange}  required />
          <Button  type="submit"  variant="contained"  color="primary"  fullWidth  size="large"  style={{ marginTop: '20px' }}>
            Reset Password
          </Button>
        </form>
        {message && (
          <Typography variant="body2"  style={{ marginTop: '10px', color: 'green' }}>
            {message}
          </Typography>
        )}
      </Paper>
    </Container>
    </div>
  );
}

export default ForgotPasswordPage;
