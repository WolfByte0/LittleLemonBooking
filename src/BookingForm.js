import { useState, useEffect } from "react"

function BookingForm( {availableTimes, dispatchDateChange, handleSubmit} ) {
  const [bookingInfo, setBookingInfo] = useState({date: "", time: "", guests: 1, occasion: "Birthday"}) 
  const [isDisabled, setDisabled] = useState(true)
  useEffect(() => {
    if (bookingInfo.date === "" || bookingInfo.time === "") {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  },  [bookingInfo.date, bookingInfo.time] )
  return (
    <form onSubmit={(e) => handleSubmit(e, bookingInfo)}>
      <label htmlFor="date">Date</label>
      <input type="date" id="date" data-testid="date-selector" onChange={e => {
        dispatchDateChange(e.target.value);
        setBookingInfo({...bookingInfo, date: e.target.value});
        }
      }/>
      <label htmlFor="time">Time</label>
      <select id="time" data-testid="time-selector" onChange={e => setBookingInfo( {...bookingInfo, time: e.target.value} )}>
          {availableTimes.map((time, idx) => <option key={idx} data-testid="time-option">{time}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setBookingInfo( {...bookingInfo, guests: e.target.value} )}/>
      <label htmlFor="occasion">Type of occasion</label>
      <select id="occasion" onChange={e => setBookingInfo( {...bookingInfo, occasion: e.target.value} )}>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input disabled={isDisabled} type="submit" value="Make Your reservation" data-testid="submit-btn" aria-label="Make reservation" />
    </form>
  );
}

export default BookingForm;
