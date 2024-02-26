import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './COMPONENTS/Splash';
import OptionPage from './COMPONENTS/OptionPage';
import BookRide from './COMPONENTS/BookRide';
import RideRequest from './COMPONENTS/RideRequest';
import AccountPage from './COMPONENTS/AccountPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/LoginForm/*" element={<OptionPage />} />
        <Route path="/BookRide" element={<BookRide />} />
        <Route path="/RideRequest" element={<RideRequest />} />
        <Route path="/Account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
};

export default App;