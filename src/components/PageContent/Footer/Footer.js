import image from '../../../uecc.png';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className='contents'>

            <div className='logo'>
                <img src={image} alt='UEC' />
                
            </div>

            <div className='address'>
                <p>#16 Urualla/ Lumumber Street <br/> Mile 1 Diobu, Port-Harcourt, Rivers State. <br/> Service Times: 7am Every First Sunday & 9am every other Sundays </p>
            </div>

            <div className='Links'>
                <h5>Our Social Media</h5>
                <Link to=''></Link>

            </div>
            </div>
        </footer>
    )
}

export default Footer;