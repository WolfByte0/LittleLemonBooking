import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';

import { useReducer } from 'react';
import HomePage from './HomePage.js'
import BookingPage from './BookingPage.js'
import AboutPage from './AboutPage.js'

function App() {
  const getAvailableTimes = (state, action) => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  const [availableTimes, dispatchDateChange] = useReducer(getAvailableTimes, ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchDateChange={dispatchDateChange}/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
