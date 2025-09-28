import './App.css';
import { Routes, Route, useNavigate } from 'react-router';

import { useReducer } from 'react';
import HomePage from './HomePage.js'
import BookingPage from './BookingPage.js'
import AboutPage from './AboutPage.js'
import ConfirmedBooking from './ConfirmedBooking.js'

function App() {

  const getAvailableTimes = (state, action) => {
    return window.fetchAPI(new Date(action));
  }

  const handleSubmit = (e, bookingInfo) => {
    e.preventDefault()
    window.submitAPI(bookingInfo);
    navigate("/confirm", { state: { bookingInfo } })
  }

  const [availableTimes, dispatchDateChange] = useReducer(getAvailableTimes, window.fetchAPI(new Date()));
  let navigate = useNavigate();

  return (
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchDateChange={dispatchDateChange} handleSubmit={handleSubmit}/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/confirm" element={<ConfirmedBooking/>}></Route>
      </Routes>
  );
}

export default App;
