import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useParams } from "react-router-dom"

import HomeImg from "../assets/home-icon.png"

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    // Make a GET request to retrieve a random beer
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching random beer:', error);
      });
  }, []);

  return (
    <div>
      <Link to="/">
          <div style={{"background":"skyblue","textAlign":"center","padding":"10px","marginBottom":"20px"}}>
           <img src={HomeImg}/>
           </div>
          </Link>
      {randomBeer ? (
        <div style={{"padding":"20px"}}>
        <div className="BeerDetailImg">
         <img  src={randomBeer.image_url} alt={randomBeer.name} />
       </div>
         <div className="BeerDetailContent" ><h1>{randomBeer.name}<span>{randomBeer.attenuation_level}</span></h1>
         <h3 style={{"color":"#d2d2d2"}}>{randomBeer.tagline}<span>{randomBeer.first_brewed}</span></h3>
          
          <p>{randomBeer.description}</p>
       <p style={{"color":"#d2d2d2"}}>{randomBeer.contributed_by}</p>

          </div> 
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomBeerPage;
