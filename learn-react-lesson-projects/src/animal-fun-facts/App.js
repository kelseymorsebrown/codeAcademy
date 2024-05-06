import React from 'react';
import { animals } from './animals';

function App() {
  const title = '';

  const background = (
    <img
      className="background"
      alt="ocean"
      src={require('./images/ocean.jpg')}
    />
  );

  const showBackground = true;

  const images = [];

  for (const animal in animals) {
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={require(`./images/${animals[animal].image}`)}
        aria-label={animal}
        role="button"
        onClick={displayFact}
      />
    );
  }

  function displayFact(e) {
    const animal = e.target.alt;
    const i = Math.floor(Math.random() * animals[animal].facts.length);
    const funFact = animals[animal].facts[i];

    document.getElementById('fact').innerHTML = funFact;
  }

  return (
    <div>
      <h1>{title || 'Click an animal for a fun fact'}</h1>
      {showBackground && background}
      <div className="animals">{images}</div>
      <p id="fact"></p>
    </div>
  );
}

export default App;
