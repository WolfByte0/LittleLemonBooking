import './App.css';
import { Routes, Route, useNavigate } from 'react-router';

import { useReducer } from 'react';
import HomePage from './HomePage.js'
import BookingPage from './BookingPage.js'
import AboutPage from './AboutPage.js'
import ConfirmedBooking from './ConfirmedBooking.js'

function seededRandom (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }
function fetchAPI(date) {
  let result = [];
  let random = seededRandom(date.getDate());
  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
function submitAPI(formData) {
  return true;
};
  
function App() {
  const getAvailableTimes = (state, action) => {
    return fetchAPI(new Date(action));
  }

  const handleSubmit = (e, bookingInfo) => {
    e.preventDefault()
    submitAPI(bookingInfo);
    navigate("/confirm", { state: { bookingInfo } })
  }

  const [availableTimes, dispatchDateChange] = useReducer(getAvailableTimes, fetchAPI(new Date()));
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
