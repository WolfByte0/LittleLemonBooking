import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';

import { useReducer } from 'react';
import HomePage from './HomePage.js'
import BookingPage from './BookingPage.js'
import AboutPage from './AboutPage.js'

function App() {
  const getAvailableTimes = (state, action) => {
    return window.fetchAPI(new Date(action));
  }
  const [availableTimes, dispatchDateChange] = useReducer(getAvailableTimes, window.fetchAPI(new Date()));

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
