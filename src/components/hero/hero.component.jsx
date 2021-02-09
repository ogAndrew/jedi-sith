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
      <Nav isSith={isSith} />

      <header
        id="showcase"
        className={`hero ${isSith ? 'sith-bg' : 'jedi-bg'}`}
      >
        <div className="container showcase-container">
          <h1 className="landing-title">
            {isSith ? headingText['sith-title'] : headingText['jedi-title']}
          </h1>
          <Slider isSith={isSith} toggleTheme={toggleTheme} />
        </div>
      </header>
    </>
  );
};

export default Hero;
