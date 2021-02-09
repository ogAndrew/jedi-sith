import React, { useState, useEffect } from 'react';

import Nav from './components/nav/nav.component';
import Hero from './components/hero/hero.component';
import Force from './components/force/force.component';
import WarriorList from './components/warrior-list/warrior-list.component';
import Footer from './components/footer/footer.component';

import data from './data';

function App() {
  const [theme, setTheme] = useState('jedi-mode');
  const [isSith, setIsSith] = useState(false);

  const toggleTheme = () => {
    if (theme === 'jedi-mode') {
      setTheme('sith-mode');
      setIsSith((state) => !state);
    } else {
      setTheme('jedi-mode');
      setIsSith((state) => !state);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <main>
      <Hero isSith={isSith} toggleTheme={toggleTheme} />
    </main>
  );
}

export default App;
