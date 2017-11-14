import './App.scss';
import React, { Component }                      from 'react';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';
import asyncComponent                            from './components/AsyncComponent';
import Header                                    from './components/Header/Header';
import SideNav                                   from './components/SideNav/SideNav';
// import Home                                      from './components/Home/Home';
// import ImageIndexContainer                       from './containers/ImageIndexContainer';
// import ImageSliderContainer                      from './containers/ImageSliderContainer';
// import DisplayEditContainer                      from './containers/DisplayEditContainer';
// import EventCalendarContainer                    from './containers/EventCalendarContainer';

const AsyncHome                   = asyncComponent(() => import('./components/Home/Home'));
const AsyncImageIndexContainer    = asyncComponent(() => import('./containers/ImageIndexContainer'));
const AsyncImageSliderContainer   = asyncComponent(() => import('./containers/ImageSliderContainer'));
const AsyncDisplayEditContainer   = asyncComponent(() => import('./containers/DisplayEditContainer'));
const AsyncEventCalendarContainer = asyncComponent(() => import('./containers/EventCalendarContainer'));
const AsyncContactContainer       = asyncComponent(() => import('./containers/ContactContainer'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navIsOpen: window.innerWidth > 767
    }

    this.openNav = this.openNav.bind(this);
  }

  openNav(bool) {
    this.setState({ navIsOpen: bool });
  }

  render() {
    return (
      <div className='App'>
        <Header openNav={this.openNav} navIsOpen={this.state.navIsOpen}/>

        <Router>
          <section className='middleShell'>
            <SideNav openNav={this.openNav} navIsOpen={this.state.navIsOpen}/>
            <Route exact path='/'           component={AsyncHome}/>
            <Route path='/fave-images'      component={AsyncImageIndexContainer}/>
            <Route path='/edit-information' component={AsyncDisplayEditContainer}/>
            <Route path='/image-slider'     component={AsyncImageSliderContainer}/>
            <Route path='/event-calendar'   component={AsyncEventCalendarContainer}/>
            <Route path='/contact'          component={AsyncContactContainer}/>            

            {/* TIMELINE COMPONENT
            FAVOURITES COMPONENT */}
          </section>
        </Router>
      </div>
    );
  }
}

export default App;
