import React from 'react';
import {useState } from 'react'
import '../App.css'



function SearchForm({onSearch}) {
    const [tennisQuery, setTennisQuery] = useState({
        name: "",
        year: "",
        court:""
      })
    
    function handleChange(e) {
        const {name, value} = e.target;
        setTennisQuery({...tennisQuery, [name]: value});
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(tennisQuery);
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-row gap-2'>
            <input 
            name="name"
            value={tennisQuery.name}
            onChange={handleChange}
            placeholder="Enter Player Name"
            className='w-auto border rounded p-2'
            />
            <input 
            name="year"
            value={tennisQuery.year}
            onChange={handleChange}
            placeholder="Enter year"
            className='w-auto border rounded p-2'

            />
            <input
            name="court"
            value={tennisQuery.court}
            onChange={handleChange}
            placeholder='Clay/Hard/Grass'
            className='w-auto border rounded p-2'
            />

            <button type="Submit">Search</button>
        </form>
    );
}

export default SearchForm;