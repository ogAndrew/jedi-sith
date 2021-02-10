import React from 'react';
import Slider from '../slider/slider.component';

import './footer.styles.css';

const Footer = ({ isSith, toggleTheme }) => (
  <section id="footer" className="footer">
    <h3 className="footer-text">
      Darkness rises
      <br />
      <span class="choose-light">and light to meet it.</span>
    </h3>
    <Slider isSith={isSith} toggleTheme={toggleTheme} />
  </section>
);

export default Footer;
