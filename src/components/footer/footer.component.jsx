import React from 'react';

const Footer = () => (
  <section className="footer">
    <h3 className="footer-text">
      Darkness rises
      <br />
      <span class="choose-light">and light to meet it.</span>
    </h3>
    <div class="theme-switch-wrapper">
      <span class="toggle-text" id="toggle-text">
        Light Side
      </span>
      <label class="theme-switch">
        <input type="checkbox" name="toggle-bottom" />
        <div class="slider round"></div>
      </label>
    </div>
  </section>
);

export default Footer;
