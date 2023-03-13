import image from '../../uecc.png';
// import MenuLogo from "../HeaderItems/menulogo";
import './mainnav.css';
import { Link } from 'react-router-dom';


function MainNavigation() {
  return (
    <header>
      <div className='logo'>
        <img src={image} alt="" />
      </div>
      <nav>
        {/* <MenuLogo/> */}
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
      </nav>
    </header>
  );
}

export default MainNavigation;
