import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();
  const [bmi, setBmi] = useState();
  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = (+mass / (+height) ** 2) * 10000;
    setBmi(bmi.toFixed(4));
    setHeight('');
    setMass('');
  };
  return (
    <>
      <div className="App">
        <form onSubmit={calculate}>
          <div className='divContainer'>
            <h1 className="label" id="center">Enter height and weight to find the BMI :</h1>
            <p id="p1">
            <label className="label" id="h">Height  : </label>
            <input placeholder=' Enter height in cm' value={height} onChange={(e) => setHeight(e.target.value)} /><br />
            </p>
            <p id="p2">
            <label className="label" id="w">Weigth: </label>
            <input placeholder=' Enter Weight in Kg' value={mass} onChange={(e) => setMass(e.target.value)} /><br />
            </p>
            <button className="btn" type="submit">Calculate</button>
            <p className="label" id="b">BMI : {bmi}</p>
          </div>
          <div className='paraDiv'>
            <strong>BMI Categories :</strong>
            <p>⦾ Underweight = Less than 18.5</p>
            <p>⦾ Normal weight = 18.5 to 24.9</p>
            <p>⦾ Overweight = 25 to 29.9</p>
            <p>⦾ Obesity = 30 or greater</p>
          </div>

        </form>
      </div>

    </>
  );
}

export default App;