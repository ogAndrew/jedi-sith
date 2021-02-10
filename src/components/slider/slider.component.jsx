import React from 'react';
import './slider.styles.css';

function Slider({ isSith, toggleTheme }) {
  
  const handleChange = (event) => {
    const {
      target: { checked },
    } = event;
    if (checked) {
      toggleTheme('jedi-mode');
    } else {
      toggleTheme('sith-mode');
    }
  };

  return (
    <div className="theme-switch-wrapper">
      <span className="toggle-text">{isSith ? 'Dark Side' : 'Light Side'}</span>
      <label className="theme-switch">
        <input type="checkbox" checked={isSith} name="toggle-top" onChange={handleChange} />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export default Slider;
