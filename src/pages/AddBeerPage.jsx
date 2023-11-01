import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeImg from "../assets/home-icon.png"
import axios from "axios"

const AddBeerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, //Dynamic key binding
    });
  };

  const handleCreateBeer = () => {

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        console.log("Beer created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating beer:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateBeer(); 
  };

  return (
    <div>
      <Link to="/">
          <div style={{"background":"skyblue","textAlign":"center","padding":"10px","marginBottom":"20px"}}>
           <img src={HomeImg}/>
           </div>
          </Link>
     
      <form onSubmit={handleSubmit}>
      <h1>Create a New Beer</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>First Brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Brewer's Tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Attenuation Level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contributed By:</label>
          <input
            type="text"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">ADD BEER</button>
        </div>
      </form>
    </div>
  );
};

export default AddBeerPage;
