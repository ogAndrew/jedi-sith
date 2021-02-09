import React from 'react';
import Nav from '../nav/nav.component';
import Slider from '../slider/slider.component';

import './hero.styles.css';

const headingText = {
  'jedi-title': 'May the force be with you',
  'sith-title': 'Give in to your anger',
};

const Hero = ({ isSith, toggleTheme }) => {
  return (
    <>
      <Nav />
      <section className={`hero ${isSith ? 'sith-bg' : 'jedi-bg'}`}>
        <div className="title-group">
          <h1 className="landing-title">
            {isSith ? headingText['sith-title'] : headingText['jedi-title']}
          </h1>
        </div>
        <Slider isSith={isSith} toggleTheme={toggleTheme} />
      </section>
    </>
  );
};

export default Hero;
