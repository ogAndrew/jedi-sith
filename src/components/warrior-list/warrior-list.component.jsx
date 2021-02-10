import React from 'react';
import Warrior from '../warrior/warrior.component';
import { warriors } from '../../data';

import './warrior-list.styles.css';

const WarriorList = ({ isSith }) => {
  let listOfWarriors;
  if (isSith) {
    listOfWarriors = warriors.filter((warrior) => warrior.id < 5);
  } else {
    listOfWarriors = warriors.filter((warrior) => warrior.id > 4);
  }

  return (
    <section id="warriors" className="warriors-container">
      {listOfWarriors.map((warrior) => {
        return <Warrior key={warrior.id} isSith={isSith} warrior={warrior} />;
      })}
    </section>
  );
};

export default WarriorList;
