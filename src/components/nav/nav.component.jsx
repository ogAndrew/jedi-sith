import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from '../../data';

import './nav.styles.css';

function Nav({ isSith }) {
  const [showLinks, setShowLinks] = useState(false);

  let filteredLinks = links.filter((link) => {
    if (isSith) {
      return link.text !== 'jedi';
    } else {
      return link.text !== 'sith';
    }
  });

  const toggleLinks = () => {
    setShowLinks((prevState) => !prevState);
  };

  return (
    <nav class="nav">
      <button className="nav-toggle" onClick={toggleLinks}>
        <FaBars />
      </button>
      <div
        className={`${
          showLinks ? 'links-container show-container' : 'links-container'
        }`}
      >
        <ul>
          {filteredLinks.map((link) => {
            let { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text.toUpperCase()}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
