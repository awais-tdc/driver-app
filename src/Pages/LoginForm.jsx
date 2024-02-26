import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
 
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
 
export default function LoginPage(props) {
  
const defaultTheme = createTheme();
 const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email()
      .required("Email or Phone Number is required"),
    password: Yup.string().required("Password is required"),
    address: Yup.string().required("Address is required"),
    cnic: props.role === 'driver' ? Yup.string().required('CNIC is required') : Yup.string(),

  });
 
 
  const navigate = useNavigate();
 
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    resetForm
  } = useFormik({
    initialValues: { name: "", email: "", password: "", address: "", cnic: "" },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: async (data) => {
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      resetForm()
      if (props.role === 'passenger') {
        navigate('/BookRide');
      } else if (props.role === 'driver') {
        navigate('/AcceptRide');
      }
    },
     
  });
 
  return (
    <Box>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOpenOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                   
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                  />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="address"
                    id="address"
                    autoComplete="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   
                  />
 
                </Grid>
               {props.role==="driver"? <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="cnic"
                    label="CNIC"
                    type="cnic"
                    id="cnic"
                    autoComplete="cnic"
                    value={values.cnic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(errors.cnic)}
                    helperText={errors.cnic}
                  />
 
                </Grid>:""}
               
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}