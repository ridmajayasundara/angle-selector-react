import React, { useState } from 'react';
import './App.css';

function App() {
  const [angle, setAngle] = useState(0);

  const handleAngleChange = (event) => {
    let newAngle = parseInt(event.target.value);
    newAngle = ((newAngle % 360) + 360) % 360;
    setAngle(newAngle);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Angle Selector</h2>
        <div className="angle-display">{angle}°</div>
        <input
          type="number"
          value={angle}
          onChange={handleAngleChange}
          min="0"
          max="360"
        />
        <input
          type="range"
          value={angle}
          onChange={handleAngleChange}
          min="0"
          max="360"
          className="slider"
        />
        <div className="radio-buttons">
          {[0, 45, 60, 90, 180].map((value) => (
            <label key={value} className={angle === value ? 'active' : ''}>
              <input
                type="radio"
                name="anglePreset"
                value={value}
                checked={angle === value}
                onChange={handleAngleChange}
              />
              {value}°
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;