import './Home.scss';
import React       from 'react';
import MainSection from '../MainSection/MainSection';
import BottomNav   from '../BottomNav/BottomNav';

const Home = () => {
  return (
    <MainSection>
      <div className='landing'>
        <div>
          <h1 className='landing__header'>
            Web Developer
          </h1>

          <p className='landing__subtext'>
            Writing maintainable code to solve the right problems.
          </p>
        </div>
      </div>

      <div className='about'>
        <div className='about__section'>
          <h1 className='about__header'>
            My Craft
          </h1>

          <p className='about__paragraph'>
            Web development is my craft. I live and breathe it. Today I am
            better than yesterday. Everyday is an iteration with the goal of
            continuous improvement. I strive to always write clean, efficient code that
            solves the right problems.
          </p>
        </div>

        <div className='about__section'>
          <h1 className='about__header'>
            Current Focus
          </h1>

          <p className='about__paragraph'>
            I began learning to code using Ruby and Ruby on Rails. Over
            the last year I have become laser focused on front-end
            web development. JavaScript, React, Redux, HTML5, CSS3 are
            my jam right now.
          </p>
        </div>

        <div className='about__section'>
          <h1 className='about__header'>
            The User
          </h1>

          <p className='about__paragraph'>
            I obsess over the small details that lead to better UX. As a user I am
            always noticing experiences that cause, what I would call,
            micro-annoyances. Example: A phone number input on a form using
            type='text' instead of type='tel'. The main difference is that on mobile,
            type='tel' will bring up the number pad instead of the main keyboard.
            Getting these things right, matters a lot to me.
          </p>
        </div>

        <div className='about__section'>
          <h1 className='about__header'>
            What Drives Me
          </h1>

          <p className='about__paragraph'>
            First and foremost I am a husband and a father. I have a 3 year old daughter
            and baby son. My wife is my biggest supporter and has helped me become
            the person I am today. I must feel that time spent away from my family is
            spent wisely. This is why I have sought out a career that challenges me
            daily. This is why I do my best work day after day. I have fallen deeply
            in love with my craft and am proud to model that to my children.
          </p>
        </div>
      </div>

      <BottomNav
        leftLinkName='Contact'
        leftRoute='/contact'
        rightLinkName='Components'
        rightRoute='/fave-images'/>
    </MainSection>
  );
}

export default Home;
