import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HistoryIcon from '@mui/icons-material/History';
import RequestIcon from '@mui/icons-material/RequestPage';
import AccountIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AccountContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px', // Add padding for better spacing
});
 
const DriverImage = styled('img')({
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  marginBottom: '20px', // Increased margin for better spacing
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
  alignItems: 'center',
});
 
const StyledIconButton = styled(IconButton)({
  color: 'white',
  fontSize: '10px',
  flexDirection: 'column',
});
 
const LogoutButton = styled(Button)({
  fontSize: '18px',
  backgroundColor: '#FF0000',
  color: 'white',
  '&:hover': {
    backgroundColor: '#CC0000',
  },
});
 
const AccountPage = () => {
  const navigate = useNavigate();
 
  // Dummy data for name and email, you can replace it with actual data
  const name = 'John Doe';
  const email = 'john.doe@example.com';
 
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out');
    // Redirect to the login page after logout
    navigate('/');
  };
 
  return (
    <>
    <Box sx = {{display : "flex", justifyContent : "space-between", mb : 2}}>
  <ArrowBackIcon onClick={() => {
    navigate("/RideRequest");
              }} />
  <Typography sx = {{fontWeight : "bold"}}>Profile</Typography>
  <MoreVertIcon/>
</Box>
        <AccountContainer>

      <DriverImage src="https://source.unsplash.com/random/150x150" alt="Driver" />
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {email}
      </Typography>
      <LogoutButton style={{marginTop: '60px', padding: '10px 30px', backgroundColor : "blue"}} onClick={() => {
    navigate("/LoginForm/*");
              }}>Logout</LogoutButton>
    </AccountContainer>
    
    <NavigationBar  sx={{backgroundColor:"white", display:'flex', justifyContent:"space-between"}}position="fixed">
        <StyledToolbar>
          <StyledIconButton component={Link} to="/BookRide">
            <HomeIcon  sx={{color:"gray"}} />
           
          </StyledIconButton>
          <StyledIconButton component={Link} to="/RideRequest">
            <RequestIcon  sx={{color:"gray"}} />
           
          </StyledIconButton>
          <StyledIconButton component={Link} to="/account">
            <AccountIcon  sx={{color:"gray"}} />
           
          </StyledIconButton>
        </StyledToolbar>
      </NavigationBar>
    </>
  );
};
 


export default AccountPage;