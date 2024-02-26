import React, { useState } from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginForm from './LoginForm';

const buttonStyle = {
  width: '100%',
  padding: '15px 25px',
  color: 'white',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'none',
  border: '1px solid #1976D2',
  borderRadius: '15px'
};

const rideButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#1976D2',
};

const drivingButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'white',
  color: '#1976D2',
};

const ArrowIconStyle = {
  fontSize: '25px',
  borderRadius: '50%',
  padding: '5px',
  color: '#1976D2',
};

const OptionPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setShowLoginForm(true);
  };

  // Use media query to check for small screen (e.g., mobile phones)
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      paddingX={{ xs: 2, sm: 4, md: 6 }}
    >
      {!showLoginForm ? (
        <>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon style={{ ...ArrowIconStyle, color: '#1976D2', backgroundColor: 'white' }} />}
            style={{
              ...rideButtonStyle,
              maxWidth: isSmallScreen ? '100%' : '300px', // Adjusted maxWidth for small screens
              width: '100%',
            }}
            onClick={() => handleRoleSelection('passenger')}
          >
            <Typography variant="h6" component="div" style={{ marginRight: '10px' }}>
              Pessenger
            </Typography>
          </Button>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon style={{ ...ArrowIconStyle, color: 'white', backgroundColor: '#1976D2' }} />}
            style={{
              ...drivingButtonStyle,
              maxWidth: isSmallScreen ? '100%' : '300px', // Adjusted maxWidth for small screens
              width: '100%',
            }}
            onClick={() => handleRoleSelection('driver')}
          >
            <Typography variant="h6" component="div" style={{ marginRight: '10px' }}>
Driver
            </Typography>
          </Button>
        </>
      ) : (
        <LoginForm role={selectedRole} />
      )}
    </Box>
  );
};

export default OptionPage;
