import restaurant from './images/restaurant.webp';
import { Link } from 'react-router';

function HomeMain() {
  return (
    <>
    <center>
      <h1> Welcome to our restaurant!</h1>
    </center>
    <main className="home">
      <div className="image-container">
        <img src={restaurant} alt="Delicious food" />
        <Link to="/booking" className="button yellowBtn">Book a table</Link>
      </div>
    </main>
    </>
  );
}

export default HomeMain;
