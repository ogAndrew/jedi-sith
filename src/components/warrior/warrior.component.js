import React from 'react';
import './warrior.styles.css';

function Warrior({ isSith, warrior }) {
  const { id, name, planet, image, ship, url } = warrior;
  return (
    <div className="warrior-card">
      <div className="warrior-info">
        <h2 className="warrior-name">{name}</h2>
        <a href={url} class={`btn ${isSith ? 'sith' : 'jedi'}`}>
          Read Bio
        </a>
        <div className="line"></div>
        <div className="warrior-info-group">
          <p className="warrior-subtitle">Home Planet</p>
          <p>{planet}</p>
        </div>
        <div className="warrior-info-group">
          <p className="warrior-subtitle">Starship</p>
          <p>{ship}</p>
        </div>
      </div>
      <div className="warrior-img-container">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default Warrior;
