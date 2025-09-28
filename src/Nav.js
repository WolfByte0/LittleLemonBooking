import { Link } from 'react-router';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="button" data-testid="home-btn">Home Page</Link>
        </li>
        <li>
          <Link to="/booking" className="button" data-testid="book-btn">Book a table</Link>
        </li>
        <li>
          <Link to="/about" className="button" data-testid="about-btn">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
