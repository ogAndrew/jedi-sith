import React from 'react';
import './nav.styles.css';

function Nav(props) {
  return (
    <nav class="nav">
      <ul>
        <li>
          <a href="#force">The Force</a>
        </li>
        <li>
          <a href="#jedi">Jedi</a>
        </li>
        <li>
          <a href="#footer">Choose Your Destiny</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
