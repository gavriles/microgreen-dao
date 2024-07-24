// src/App.js
import React, { useEffect, useState } from 'react';
import { WebApp } from '@twa-dev/sdk';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const tg = WebApp();
    tg.ready();
    setUser(tg.initDataUnsafe.user);

    tg.onEvent('mainButtonClicked', () => {
      if (plants.length > 0) {
        const newPlants = plants.slice(0, -1);
        setPlants(newPlants);
        tg.sendData(JSON.stringify({ action: 'sell', plant: 'microgreens' }));
      } else {
        alert('No microgreens to sell!');
      }
    });
  }, [plants]);

  const handlePlant = () => {
    const newPlant = 'Microgreens';
    setPlants([...plants, newPlant]);
    WebApp().sendData(JSON.stringify({ action: 'plant', plant: newPlant }));
  };

  return (
    <div className="App">
      {user && <h1>Hello, {user.first_name}!</h1>}
      <button onClick={handlePlant}>Plant Microgreens</button>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>{plant}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
