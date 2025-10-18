import { useRef, useState } from 'react'
import './App.css'
import React from 'react'
import { useEffect } from 'react'
import SearchForm from './Components/SearchForm';
import Card from './Components/Card'; 

function App() {
  const [card, setCard] = useState("");
  
  /*const [tennisQuery, setTennisQuery] = useState({
    name: "",
    year: "",
    court:""
  })*/


  const handleClick = async (tennisQuery) => {
    try{
      if(!tennisQuery.name) {
        alert("Please enter a player name");
        throw new Error("Enter a name for the player to be searched");
      }      
      const query = new URLSearchParams({
          playerName: tennisQuery.name, 
          matchesYear: tennisQuery.year? tennisQuery.year : 'all',
          courtSurface: tennisQuery.court? tennisQuery.court : 'all'
      }).toString();
    
      const response = await fetch(`http://localhost:8000/api/playerStats?${query}`)
      const data = await response.json();
      //console.log(data);
      setCard(data);
    }catch(error){
      console.log(error);
    }
  };
  /*
  useEffect( () => {
    async function fetchData () {const res = await fetch('http://localhost:8000/api/working');
    const data = await res.json();
    return data;
    };
    console.log(fetchData());
  }, []);
  */

  return (
    <>
      <SearchForm
        onSearch={handleClick}
        //currentQuery={tennisQuery}
      />
      <Card card={card}/>
    </>
  )
}
export default App