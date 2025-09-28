import { useLocation } from 'react-router';


function ConfirmedBooking() {
  const location = useLocation();
  const { bookingInfo } = location.state || {};
  return (
    <>
      <h1>Booking Successful</h1>
      <h2>Date: {bookingInfo.date}</h2>
      <h2>Time: {bookingInfo.time}</h2>
      <h2>Guests: {bookingInfo.guests}</h2>
      <h2>Occasion: {bookingInfo.occasion}</h2>
    </>
  );
}

export default ConfirmedBooking;
