import React, { useState } from 'react';
import { links } from '../../data';

import './nav.styles.css';

function Nav({ isSith }) {
  let [checked, setChecked] = useState(false);

  let filteredLinks = links.filter((link) => {
    if (isSith) {
      return link.text !== 'jedi';
    } else {
      return link.text !== 'sith';
    }
  });

  return (
    <div className="menu-wrap">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((state) => !state)}
        className="toggler"
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div className={isSith ? 'sith' : 'jedi'}>
          <div>
            <ul>
              {filteredLinks.map((link) => {
                let { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url} onClick={() => setChecked(false)}>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
