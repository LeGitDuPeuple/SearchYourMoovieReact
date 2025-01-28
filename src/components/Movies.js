import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Movies = () => {
const [data, setData] = useState([]);
const [searchMoovie, setSearchMoovie] = useState("");
   const apiKey = "ab4bf68b";


    useEffect(() => {
        if(searchMoovie) {

            axios.get(`http://www.omdbapi.com/?s=${searchMoovie}}&apikey=${apiKey}`)
             .then((res) => setData(res.data.Search || []));
          
        } 
        
      }, [searchMoovie])
    
      
    return (
        <div className='moovieContainer'>
      <div className="input-container">
        
            <input 
            className='input'
            type="text" 
            value={searchMoovie}
            onChange={(e) => setSearchMoovie(e.target.value)}
            placeholder='Entrez un film'
            />
        </div>
        <div className="film">
        <ul>
        {data.map((movie, index) => (
            <Card key={index} movie={movie}/>
        ))}
      </ul>
        </div>
        </div>
    );
};

export default Movies;