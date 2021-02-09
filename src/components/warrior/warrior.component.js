import React from 'react';

function Warrior() {
  return (
    <div className="warrior-card">
      <div className="warrior-info">
        <h2 className="warrior-name">Master Yoda</h2>
        <a href="https://starwars.fandom.com/wiki/Yoda" class="btn-bio">
          READ BIO
        </a>
        <div className="warrior-info-group">
          <p className="warrior-subtitle">Home Planet</p>
          <p>Daobo</p>
        </div>
        <div className="warrior-info-group">
          <p className="warrior-subtitle">Starship</p>
          <p>Jedi Starfighter</p>
        </div>
      </div>
      <div className="warrior-img-container">
        <img src="../assets/images/light-yoda.png" alt="Master Yoda" />
      </div>
    </div>
  );
}

export default Warrior;
