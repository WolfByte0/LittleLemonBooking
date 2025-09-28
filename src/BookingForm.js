import { useState } from "react"

function BookingForm( {availableTimes, dispatchDateChange} ) {
  const [bookingInfo, setBookingInfo] = useState({date: "", time: "", guests: 1, occasion: ""}) 
  const handleSubmit = (e) => {
    e.preventDefault()
    window.submitAPI(bookingInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={e => {
        dispatchDateChange(e.target.value);
        setBookingInfo({...bookingInfo, date: e.target.value});
        }
      }/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={e => setBookingInfo( {...bookingInfo, time: e.target.value} )}>
          {availableTimes.map((time, idx) => <option key={idx}>{time}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setBookingInfo( {...bookingInfo, guests: e.target.value} )}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={e => setBookingInfo( {...bookingInfo, occasion: e.target.value} )}>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation"/>
    </form>
  );
}

export default BookingForm;
