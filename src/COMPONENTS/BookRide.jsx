import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BikeIcon from "@mui/icons-material/DirectionsBike";
import CarIcon from "@mui/icons-material/DirectionsCar";
import AcCarIcon from "@mui/icons-material/AcUnit";
import HomeIcon from "@mui/icons-material/Home";
import RequestIcon from "@mui/icons-material/RequestPage";
import AccountIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const locationArray = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.328237875936!2d74.25636258697475!3d31.46461865700412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708938945429!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54508.42654913652!2d74.1397959768552!3d31.36514180687851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff9a30fa362d%3A0x528615a7981ce611!2sBahria%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708939466584!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0380940038967!2d74.3877072746941!3d31.468138249722468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190611d0832215%3A0x461694c13fc63062!2sDHA%20Sector%20EE%20Dha%20Phase%204%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708939582952!5m2!1sen!2s",
];

const AnimatedBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const AnimatedTextField = styled(TextField)({
  marginBottom: "10px",
});

const StyledImage = styled("img")({
  width: "100%",
  borderRadius: "30px",
});

const StyledFormContainer = styled("div")({
  backgroundColor: "rgb(229, 244, 298)",
  borderTopLeftRadius: "50px",
  padding: "20px",
  marginTop: "10px",
});

const NavigationBar = styled(AppBar)({
  top: "auto",
  bottom: 0,
  height: "50px",
  width: "100%",
  padding: "0px 40px",
  margin: "0",
  backgroundColor: "rgb(0,0,221)",
  cursor: "pointer",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledIconButton = styled(IconButton)({
  color: "white",
});

const BookRide = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [selectedPickupTime, setSelectedPickupTime] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const handleBookNow = () => {
    // Pass pickupLocation and destination as state
    navigate("/RideRequest", {
      state: {
        pickupLocation,
        destination,
        vehicleType,
        pickupTime,
        selectedPickupTime,
      },
    });
  };

  const getPickupTimeOptions = () => {
    if (pickupTime === "Morning") {
      return ["6am", "7am", "8am"];
    } else if (pickupTime === "Evening") {
      return ["6pm", "7pm", "8pm"];
    }
    return [];
  };
  const [location,setlocation]=useState(locationArray[0]);
  return (
    
    <Box>
      <AnimatedBox>
        <StyledImage
          src="https://img.freepik.com/free-vector/taxi-app-concept-illustration_52683-36028.jpg"
          alt="Booking Ride"
        />
        <Box
          sx={{
            backgroundColor: "lightblue",
            borderRadius: "20px",
            padding: 2,
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <ArrowBackIcon
              onClick={() => {
                navigate("/LoginForm");
              }}
            />
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "800",
                paddingBottom: "20px",
              }}
              gutterBottom
            >
              Create your membership
            </Typography>
          </Box>
          <form style={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AnimatedTextField
                  label="Enter Your Pickup Location"
                  variant="outlined"
                  fullWidth
                  value={pickupLocation}
                  onChange={(e) => {setPickupLocation(e.target.value);
                  if(e.target.value==="johar town"){
                    setlocation(locationArray[1]);
                  }else if(e.target.value== "DHA"){
                    setlocation(locationArray[2]);
                  }else if(e.target.value=="Bahria"){ 
                    setlocation(locationArray[0]);
                  }
                  else {
                    setlocation(locationArray[0]);
                  }
                }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                  select
                >
                  <MenuItem value="Johar Town">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography>Johar town</Typography>
                      <LocationOnIcon />
                    </Box>
                  </MenuItem>
                  <MenuItem value="DHA">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography>DHA</Typography>
                      <LocationOnIcon />
                    </Box>
                  </MenuItem>
                  <MenuItem value="Bahria">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography>Bahria</Typography>
                      <LocationOnIcon />
                    </Box>
                  </MenuItem>
                </AnimatedTextField>
                <Box>
                  <div style={{ width: "100%" }}>
                    <iframe
                    
                      title="Google Map"
                      width="100%"
                      height="200"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src={location}
                    >
                      <a href="https://www.gps.ie/">gps devices</a>
                    </iframe>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <AnimatedTextField
                  label="Where To?"
                  variant="outlined"
                  fullWidth
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                  select
                >
                  <MenuItem value="Johar Town">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography>Johar town</Typography>
                      <LocationOnIcon />
                    </Box>
                  </MenuItem>
                  <MenuItem value="DHA">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography>DHA</Typography>
                      <LocationOnIcon />
                    </Box>
                  </MenuItem>
                  <MenuItem value="Bahria">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography>Bahria</Typography>
                      <LocationOnIcon />
                    </Box>
                  </MenuItem>
                </AnimatedTextField>
                <Box>
                  <div style={{ width: "100%" }}>
                    <iframe
                    
                      title="Google Map"
                      width="100%"
                      height="200"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      // src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      src={location}
                    >
                      <a href="https://www.google.com/maps/search/?api=1&query=johar+town">
                        gps devices
                      </a>
                    </iframe>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <AnimatedTextField
                  label="Pickup Time"
                  variant="outlined"
                  fullWidth
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  select
                >
                  <MenuItem value="Morning">Morning</MenuItem>
                  <MenuItem value="Evening">Evening</MenuItem>
                </AnimatedTextField>
              </Grid>
              {pickupTime && (
                <Grid item xs={12}>
                  <AnimatedTextField
                    label="Select Pickup Time"
                    variant="outlined"
                    fullWidth
                    value={selectedPickupTime}
                    onChange={(e) => setSelectedPickupTime(e.target.value)}
                    select
                  >
                    {getPickupTimeOptions().map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </AnimatedTextField>
                </Grid>
              )}
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="vehicle-type-label">
                    Choose Your Vehicle
                  </InputLabel>
                  <Select
                    labelId="vehicle-type-label"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    label="Choose Your Vehicle"
                    endAdornment={
                      <InputAdornment position="end">
                        {vehicleType === "bike" && <BikeIcon />}
                        {vehicleType === "car" && <CarIcon />}
                        {vehicleType === "acCar" && <AcCarIcon />}
                      </InputAdornment>
                    }
                  >
                    <MenuItem value="bike">Bike</MenuItem>
                    <MenuItem value="car">Car</MenuItem>
                    <MenuItem value="acCar">AC Car</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ mb: 5 }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </AnimatedBox>
      <NavigationBar
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
        position="fixed"
      >
        <StyledToolbar>
          <HomeIcon sx={{ color: "gray" }} />
          <RequestIcon sx={{ color: "gray" }} />
          <AccountIcon sx={{ color: "gray" }} />
        </StyledToolbar>
      </NavigationBar>
    </Box>
  );
};

export default BookRide;
