import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import SWCard from './components/Card';
import {DropDown} from './components/DropDown.js';

const App = () => {

  let characters = "https://swapi.co/api/people/"
  const [data, setData] = useState([{}]);

  useEffect(() => {
	axios.get(characters)
	.then(function (response) {
	  // handle success
	  console.log(response.data.results);
	  setData(response.data.results)
	})
}, [characters]);

  return (
	<div className="App">
	  <h1 className="Header">React Wars</h1>
	  {data.map(function(item, index){
      console.log(SWCard)
	   return <SWCard name={item.name} DOB={item.birth_year} height={item.height} weight={item.mass} veh = {item.homeworld} key={index} />
	  })}

	</div>

  );
}

export default App;
