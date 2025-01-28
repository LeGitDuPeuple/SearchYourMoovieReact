import React from 'react';

const Card = ({movie, index}) => {
    return (
    <div className='cardContainer'>
            <div className="cardMovie" key={index}>

<img src={movie.Poster} alt={movie.Title} />  
<p>{movie.Title}</p>
<p>{movie.Year}</p>

<div className="btn">
    <button>button</button>
</div>
         
         </div>
    </div>
  
    );
};

export default Card;