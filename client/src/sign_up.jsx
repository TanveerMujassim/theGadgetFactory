//Email
//password/
//confirm password
//button
//signin page link


import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your signup logic here, e.g., send formData to your server
    console.log('Form data submitted:', formData);
  };

  return (
    <Container maxWidth="s">
      <Paper elevation={3} style={{ padding: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField type="text" name="username" label="Username" fullWidth margin="normal" variant="outlined" value={formData.username} onChange={handleChange} required />
          <TextField type="email" name="email" label="Email" fullWidth margin="normal" variant="outlined" value={formData.email} onChange={handleChange} required />
          <TextField type="password" name="password" label="Password" fullWidth margin="normal" variant="outlined" value={formData.password} onChange={handleChange} required/>
          <TextField type="password" name="confirmPassword" label="Confirm Password" fullWidth  margin="normal"  variant="outlined"  value={formData.confirmPassword}  onChange={handleChange}  required />
          <Button type="submit" variant="contained" color="primary" fullWidth size="large" style={{marginTop: '20px' }} href="./" >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default SignUp;
