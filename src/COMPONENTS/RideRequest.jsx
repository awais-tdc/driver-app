// RideRequest.js
 
import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import BikeIcon from "@mui/icons-material/DirectionsBike";
import CarIcon from "@mui/icons-material/DirectionsCar";
import AcCarIcon from "@mui/icons-material/AcUnit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import RequestIcon from "@mui/icons-material/RequestPage";
import AccountIcon from "@mui/icons-material/AccountCircle";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import OptionPage from "./OptionPage";
import AccountPage from "./AccountPage";
import { useNavigate } from "react-router-dom";
 
const RideRequestContainer = styled(Paper)({
  padding: "20px",
  maxWidth: "400px",
  margin: "20px auto",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  backgroundColor: "rgb(229, 244, 300)",
});
 
const RideDetails = styled(Box)({
  textAlign: "center",
  marginBottom: "20px",
});
 
const VehicleIconContainer = styled(Box)({
  margin: "10px",
});
 
const NavigationBar = styled(AppBar)({
  top: "auto",
  bottom: 0,
  height: "50px",
  width: "100%",
  backgroundColor: "rgb(0, 0, 221)",
});
 
const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});
 
const StyledIconButton = styled(IconButton)({
  color: "white",
  fontSize: "18px", // Adjust the fontsize here
});
 
const AnimatedButton = motion(Button);
 
const rideDetails = {
  rideNumber: 1,
  fare: "$15.50",
  rideTime: "10 minutes",
};
 
const RideRequest = () => {
  const location = useLocation();
  const rideState = location.state || {};
  const navigate = useNavigate();
  
  const {
    pickupLocation = "Unknown Pickup Location",
    destination = "Unknown Destination",
    vehicleType = "Unknown Vehicle Type",
  } = rideState;
 
  const handleCancel = () => {
    console.log("Ride request canceled");
  };
 
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
 
  const buttonVariants = {
    hover: { scale: 1.1 },
  };
 
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <StyledIconButton
        style={{
          color: "blue",
          fontWeight: "600",
          fontSize: "17px",
          letterSpacing: "0.2px",
          fontFamily: "Arial",
          marginTop: "10px",
        }}
        component={Link}
        to="/BookRide"
      >
        <ArrowBackIcon />{" "}
        <div style={{ color: "black", padding: "0px 4px" }}>Membership Requests</div>
      </StyledIconButton>
      <RideRequestContainer>
        <RideDetails>
          <Typography variant="h6">
            Membership No: {rideDetails.rideNumber}
          </Typography>
          <Typography variant="body1">From: {pickupLocation}</Typography>
          <Typography variant="body1">To: {destination}</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="body1">Fare: {rideDetails.fare}</Typography>
          <VehicleIconContainer>
            {vehicleType === "bike" && <BikeIcon />}
            {vehicleType === "car" && <CarIcon />}
            {vehicleType === "acCar" && <AcCarIcon />}
          </VehicleIconContainer>
          <Typography variant="body1">
            Ride Time: {rideDetails.rideTime}
          </Typography>
        </RideDetails>
        <AnimatedButton
          variants={buttonVariants}
          whileHover="hover"
          transition={{ duration: 0.3 }}
          variant="contained"
          color="error"
          fullWidth
          onClick={() => {
            navigate("/BookRide");
                      }}
        >
          Cancel Membership
        </AnimatedButton>
      </RideRequestContainer>
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
    </motion.div>
  );
};
 
export default RideRequest;