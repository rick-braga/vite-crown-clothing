import { Link } from 'react-router-dom';
import crwnLogo from '../../assets/crown.svg';

import './Navbar.styles.scss';


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='logo-container' to='/'>
        <img src={crwnLogo} alt="Crwn Logo" className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        <Link className='nav-link' to='/sign-in'>
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
