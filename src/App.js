import React, { useState } from 'react';

function App() {
  let states = [
    { state: 'UP', cities: ['Barailly', 'Agra'] },
    { state: 'TN', cities: ['chennai', 'kanchi'] },
  ];

  let towns = [
    { city: 'Barailly', towns: ['ccc', 'ddd'] },
    { city: 'Agra', towns: ['abc', 'bac'] },
    { city: 'chennai', towns: ['aaa', 'bbb'] },
    { city: 'kanchi', towns: ['jjj', 'lll'] },
  ];

  let [stateValues, setStateValues] = useState(states.map((i) => i.state));
  let [state, setState] = useState(states[0].state);
  let [cityValues, setCityValues] = useState(states[0].cities);
  let [city, setCity] = useState(states[0].cities[0]);
  let [town, setTown] = useState(towns[0].towns[0]);
  let [townValues, setTownValues] = useState(towns[0].towns);
  let handleStateChange = (e) => {
    setState(e.target.value);
    states.filter((i) => {
      if (i.state === e.target.value) {
        setCityValues(i.cities);
        setCity(i.cities[0]);
        var temp = towns.filter((j) => j.city === i.cities[0])[0].towns;
        setTownValues(temp);
        setTown(temp[0]);
      }
    });
  };
  let handleCityChange = (e) => {
    setCity(e.target.value);
    cityValues.filter((i) => {
      if (i === e.target.value) {
        console.log(i);
        var temp = towns.filter((j) => j.city === i)[0].towns;
        console.log(temp);
        setTownValues(temp);
        setTown(temp[0]);
      }
    });
  };
  let handleTownChange = (e) => {
    setTown(e.target.value);
  };
  return (
    <div className="App">
      <select onChange={handleStateChange}>
        <option value={stateValues[0]}>{stateValues[0]}</option>
        {stateValues.map((s) => (
          <option value={s}>{s}</option>
        ))}
      </select>
      <div>{state}</div>
      <select onChange={handleCityChange}>
        <option value={cityValues[0]}>{cityValues[0]}</option>
        {cityValues.map((s, i) => (
          <option value={s}>{s}</option>
        ))}
      </select>
      <div>{city}</div>
      <select onChange={handleTownChange}>
        <option value={townValues[0]}>{townValues[0]}</option>
        {townValues.map((s) => (
          <option value={s}>{s}</option>
        ))}
      </select>
      <div>{town}</div>
    </div>
  );
}

export default App;
