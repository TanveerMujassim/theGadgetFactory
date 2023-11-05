//Email
//pasword
//forget password
//button
// import React from 'react'

// const Sign_in = () => {
//   return (
//     <div>sign_in</div>
//   )
// }

// export default Sign_in

import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, } from '@mui/material';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your sign-in logic here, e.g., send formData to your server
    console.log('Form data submitted:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField type="email" name="email" label="Email" fullWidth margin="normal" variant="outlined" value={formData.email} onChange={handleChange} required />
          <TextField type="password" name="password" label="Password" fullWidth margin="normal" variant="outlined" value={formData.password}  onChange={handleChange} required />
          <Button type="submit" variant="outlined" color="success" fullWidth size="large" style={{ marginTop: '20px' }}  href="./"> 
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default SignIn;
