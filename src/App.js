import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './Pages/Splash';
import OptionPage from './Pages/OptionPage';
import BookRide from './Pages/BookRide';
import RideRequest from './Pages/RideRequest';
import AccountPage from './Pages/AccountPage';
import AcceptRide from './Pages/AcceptRide';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/LoginForm/*" element={<OptionPage />} />
        <Route path="/BookRide" element={<BookRide />} />
        <Route path="/RideRequest" element={<RideRequest />} />
        <Route path="/Account" element={<AccountPage />} />
        <Route path="/AcceptRide" element={<AcceptRide />} />
      </Routes>
    </Router>
  );
};

export default App;