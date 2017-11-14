import './SideNav.scss';
import React, { Component } from 'react';
import { NavLink }          from 'react-router-dom';
import { withRouter }       from 'react-router';

class SideNav extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location && window.innerWidth < 767) {
      this.props.openNav(false);
    }
  }

  render() {
    const { navIsOpen, openNav } = this.props;

    if (navIsOpen) {
      return (
        <nav className="sideNav">
          <div className='sideNav__mobileCloseNav' onClick={() => openNav(!navIsOpen)}>
            <i className="fa fa-times sideNav__close" aria-hidden="true"></i>
          </div>

          <NavLink exact to='/'                 className="sideNav__link">Home</NavLink>
          <NavLink exact to='/fave-images'      className="sideNav__link">Fave Images</NavLink>
          <NavLink exact to='/image-slider'     className="sideNav__link">Image Slider</NavLink>
          <NavLink exact to='/edit-information' className="sideNav__link">Display/Edit Info</NavLink>
          <NavLink exact to='/event-calendar'   className="sideNav__link">Event Calendar</NavLink>
          <NavLink exact to='/contact'          className="sideNav__link">Contact</NavLink>          
        </nav>
      );
    }
    else {
      return null;
    }
  }
}

SideNav = withRouter(SideNav);

export default SideNav;
