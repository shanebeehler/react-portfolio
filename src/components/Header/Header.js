import './Header.scss';
import React from 'react';


const Header = ({ openNav, navIsOpen }) => {
  return (
    <div className='header'>

      {/* <div className='header__logoCol'>
        <img className='header__logo' src={tempLogo}/>
      </div> */}

      <div className='header__navToggle' onClick={() => openNav(!navIsOpen)}>
        <i className="fa fa-bars header__hamburger" aria-hidden="true"></i>
      </div>

      <div className='social'>
        <a href='https://linkedin.com/in/shane-beehler' className='social__link'>
          <i className="fa fa-linkedin social__icon" aria-hidden="true"></i>
        </a>

        <a href='https://medium.com/@shanebeehler' className='social__link'>
          <i className="fa fa-medium social__icon" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
