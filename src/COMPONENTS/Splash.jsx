// SplashScreen.jsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  const navigateToOptionPage = () => {
    navigate('/LoginForm');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="90vh"
      paddingX={{ xs: 2, sm: 4, md: 6 }}
    >
      <div style={{ marginTop: '150px', textAlign: 'center' }}>
        <Typography style={{ fontSize: '13px' }}>
          Welcome to My App
        </Typography>
        <Typography variant="h2" gutterBottom>
          DRIVELU
        </Typography>
      </div>
      <div style={{ textAlign: 'center', padding: '20px', maxWidth: '400px', width: '100%' }}>
        <Typography style={{ fontSize: '13px', marginBottom: '20px' }}>
          Connect with people, connect with society
        </Typography>
        <Button
          onClick={navigateToOptionPage}
          variant="contained"
          style={{ fontSize: '17px', padding: '15px', letterSpacing: '2px', width: '100%' }}
        >
          Let's Get Started
        </Button>
      </div>
    </Box>
  );
};

export default SplashScreen;