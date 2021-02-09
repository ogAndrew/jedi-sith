import React from 'react';
import './force.styles.css';

const quotes = {
  jedi:
    "The Force is what gives a Jedi his power. It's an energy field created by all living things. It surrounds us and penetrates us; ",
  sith:
    'The dark side of the Force is a pathway to many abilities some consider to be ',
  jediBold: 'it binds the galaxy together',
  sithBold: 'unnatural',
  jediAuthor: '-Obi-Wan Kenobi',
  sithAuthor: '-Chancellor Palpatine',
};

const Force = ({ isSith }) => (
  <section className={`${isSith ? 'dark' : 'light'} container`}>
    {isSith ? (
      <>
        <p className="dark-title">The Dark Side</p>
        <h3 className="dark-quote">
          {quotes.sith}
          <span className="dark-bold">{quotes.sithBold}</span>.
        </h3>
        <p className="dark-author">{quotes.sithAuthor}</p>
      </>
    ) : (
      <>
        <p className="light-title">The Force</p>
        <h3 className="light-quote">
          {quotes.jedi}
          <span className="light-bold">{quotes.jediBold}</span>.
        </h3>
        <p className="light-author">{quotes.jediAuthor}</p>
      </>
    )}
  </section>
);

export default Force;
