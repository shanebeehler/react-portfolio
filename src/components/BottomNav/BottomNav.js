import './BottomNav.scss';
import React    from 'react';
import { Link } from 'react-router-dom';

const BottomNav = ({ leftLinkName, leftRoute, rightLinkName, rightRoute }) => {
  return (
    <div className='bottomNav'>
      <Link to={leftRoute} className='bottomNav__link'>
        <i className='fa fa-long-arrow-left bottomNav__icon' aria-hidden="true"></i>
        {leftLinkName}
      </Link>

      <Link to={rightRoute} className='bottomNav__link'>
        {rightLinkName}
        <i className='fa fa-long-arrow-right bottomNav__icon' aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default BottomNav;
