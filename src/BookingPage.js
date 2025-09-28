import Header from './Header.js'
import Nav from './Nav.js'
import BookingForm from './BookingForm.js'
import Footer from './Footer.js'

function BookingPage({availableTimes, dispatchDateChange, handleSubmit}) {
  return (
    <>
      <Header/>
      <Nav/>
      <center>
        <h1 className="yellow">Book a table now</h1>
      </center>
      <BookingForm availableTimes={availableTimes} dispatchDateChange={dispatchDateChange} handleSubmit={handleSubmit}/>
      <Footer/>
    </>
  );
}

export default BookingPage;
