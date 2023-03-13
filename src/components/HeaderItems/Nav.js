import { Link } from "react-router-dom"
import './nav.css';

function Nav() {
    return (
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    )
}

export default Nav;