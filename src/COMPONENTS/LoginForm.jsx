import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, Grow } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AnimatedBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
  paddingX: { xs: 2, sm: 4, md: 6 },
  transition: 'transform 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const AnimatedTextField = styled(TextField)({
  marginBottom: '8px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#B0BEC5',
    },
    '&:hover fieldset': {
      borderColor: '#90A4AE',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#546E7A',
    },
  },
});

const AnimatedButton = styled(Button)({
  padding: '8px',
  marginBottom: '20px',
  fontSize: '20px',
  border: '1px solid #1976D2',
  borderRadius: '5px',
  backgroundColor: '#1976D2',
  transition: 'background-color 0.3s ease-in-out',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1565C0',
  },
});

const AnimatedTypography = styled(Typography)({
  fontSize: '35px',
  marginBottom: '20px',
  color: 'black',
});

const LoginForm = ({ role }) => {
    const [formData, setFormData] = useState({
      name: '',
      emailOrPhone: '',
      address: '',
      cnic: '',
      password: '',
    });
  
    const [formErrors, setFormErrors] = useState({
      name: '',
      emailOrPhone: '',
      address: '',
      cnic: '',
      password: '',
    });
  
    const navigate = useNavigate();
  
    const navigateToOptionPage = () => {
      // Only navigate if there are no form errors
      if (!Object.values(formErrors).some((error) => error !== '')) {
        navigate('/BookRide');
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newFormErrors = {
        name: formData.name ? '' : 'Name is required',
        emailOrPhone: formData.emailOrPhone ? '' : 'Email or Phone Number is required',
        password: formData.password ? '' : 'Password is required',
        address: formData.address ? '' : 'Address is required',
        cnic: role === 'driver' && !formData.cnic ? 'CNIC is required' : '',
      };
  
      setFormErrors(newFormErrors);
  
      console.log(formData);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };
  
    return (
      <Grow in>
        <AnimatedBox>
          <AnimatedTypography variant="h5" gutterBottom>
            Login
          </AnimatedTypography>
          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
            <Grid container spacing={2}>
              {['Name', 'Email or Phone Number', 'Password', 'Address'].map((label) => (
                <Grid item xs={12} key={label}>
                  <AnimatedTextField
                    label={label}
                    variant="outlined"
                    fullWidth
                    required
                    name={label.toLowerCase().replace(/\s/g, '')}
                    value={formData[label.toLowerCase().replace(/\s/g, '')]}
                    onChange={handleChange}
                    error={!!formErrors[label.toLowerCase().replace(/\s/g, '')]}
                    helperText={formErrors[label.toLowerCase().replace(/\s/g, '')]}
                  />
                </Grid>
              ))}
              {(role === 'driver' || role === 'passenger') && (
                <Grid item xs={12}>
                  <AnimatedTextField
                    label="CNIC"
                    variant="outlined"
                    fullWidth
                    required={role === 'driver'}
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    error={!!formErrors.cnic}
                    helperText={formErrors.cnic}
                  />
                </Grid>
              )}
            </Grid>
            <br />
            <AnimatedButton onClick={navigateToOptionPage} style={{ textAlign: 'center' }} type="submit" variant="contained" color="primary" fullWidth>
              Login
            </AnimatedButton>
          </form>
        </AnimatedBox>
      </Grow>
    );
  };
  
  export default LoginForm;