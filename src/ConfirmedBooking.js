import { useLocation } from 'react-router';
import Header from './Header.js'
import Nav from './Nav.js'
import Footer from './Footer.js'

function ConfirmedBooking() {
  const location = useLocation();
  const { bookingInfo } = location.state || {};
  return (
    <>
      <Header/>
      <Nav/>
      <center>
        <h1 className="yellow">Booking Successful!</h1>
        <h2>Date: {bookingInfo.date}</h2>
        <h2>Time: {bookingInfo.time}</h2>
        <h2>Guests: {bookingInfo.guests}</h2>
        <h2>Occasion: {bookingInfo.occasion}</h2>
      </center>
      <Footer/>
    </>
  );
}

export default ConfirmedBooking;
