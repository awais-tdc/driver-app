import React from 'react';
import { Box, Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';  
import SwitchDriverIcon from '@mui/icons-material/DirectionsCar';  
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HistoryIcon from '@mui/icons-material/History';
import RequestIcon from '@mui/icons-material/RequestPage';
import AccountIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';  // Import ArrowForwardIcon

const AccountContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '20px',
});

const DriverImage = styled('img')({
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  marginBottom: '10px',
});

// Remove unused NotificationContainer
const NotificationIcon = styled(NotificationsIcon)({
  fontSize: '30px',  // Decreased font size
});

const CheckStatusButton = styled(Button)({
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',  // Center the icon and text
  gap: '5px',  // Add padding between icon and text
});

// Define SwitchDriverButton
const SwitchDriverButton = styled(Button)({
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',  // Center the icon and text
  gap: '30px',
  padding: '10px'  // Add padding between icon and text
});

const NavigationBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,
  height: '50px',
  width: '100%',
  backgroundColor: 'rgb(0, 0, 221)',
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const StyledIconButton = styled(IconButton)({ 
  color: 'white',
  fontSize: '10px',  // Decreased font size
  flexDirection: 'column',  // Added to display text below icon
});

const AccountPage = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    // Handle edit profile logic here
    console.log('Editing profile');
  };

  const handleCheckStatus = () => {
    // Handle check status logic here
    console.log('Checking notification status');
  };

  return (
    <AccountContainer>
      <DriverImage
        src="https://source.unsplash.com/random/150x150" // Replace with an API or a proper image source
        alt="Driver"
      />
      <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleEditProfile}>
        Edit Profile
      </Button>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        You are in driver mode.
      </Typography>

      {/* Switch to Driver Section */}
      <SwitchDriverButton variant="contained" color="primary" onClick={() => navigate('/driver')}>
        <SwitchDriverIcon /> Switch to Driver <ArrowForwardIcon />
      </SwitchDriverButton>

      {/* Check Status Section */}
      <CheckStatusButton variant="contained" color="primary" onClick={handleCheckStatus}>
        <NotificationIcon /> Check Status <ArrowForwardIcon />
      </CheckStatusButton>

      {/* Navigation Bar */}
      <NavigationBar position="fixed">
        <StyledToolbar>
          <StyledIconButton component={Link} to="/">
            <HomeIcon />
            <Typography variant="caption">Home</Typography>
          </StyledIconButton>
          <StyledIconButton component={Link} to="/">
            <ScheduleIcon />
            <Typography variant="caption">Schedule</Typography>
          </StyledIconButton>
          <StyledIconButton component={Link} to="/">
            <HistoryIcon />
            <Typography variant="caption">History</Typography>
          </StyledIconButton>
          <StyledIconButton component={Link} to="/">
            <RequestIcon />
            <Typography variant="caption">Ride Requests</Typography>
          </StyledIconButton>
          <StyledIconButton component={Link} to="/account">
            <AccountIcon />
            <Typography variant="caption">Account</Typography>
          </StyledIconButton>
        </StyledToolbar>
      </NavigationBar>
    </AccountContainer>
  );
};

export default AccountPage;