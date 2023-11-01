import axios from "axios"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import HomeImg from "../assets/home-icon.png"
function AllBeersPage() {
  
    const [beers ,setBeers] = useState([])
    const [searchQuery,setSearchQuery] = useState("")

    useEffect(() => {
       
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            console.log(response.data);
            setBeers(response.data);

          })
          .catch((error) => {
            console.error("Error fetching beers:", error);
          });
      }, []);

      const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
      
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
          .then((response) => {
            console.log(response.data);
            setBeers(response.data);
          })
          .catch((error) => {
            console.error("Error fetching beers:", error);
          });
      }
    return (
        <div>
        <Link to="/">
              <div style={{"background":"skyblue","textAlign":"center","padding":"10px","marginBottom":"20px"}}>
               <img src={HomeImg}/>
              </div>
              </Link>
              <input
        type="text"
        placeholder="Search beers"
        value={searchQuery}
        onChange={handleInputChange}
      />
        <ul>
          {beers.map((beer) => (
            <li key={beer._id} className="AllBeers" >
             <div className="beerImg">
              <img src={beer.image_url} alt={beer.name} />
              </div>
             <div className="beercontent" ><h1>{beer.name}</h1>
              <h3 style={{"color":"#d2d2d2"}}>{beer.tagline}</h3>
              <p>Contributed by: {beer.contributed_by}</p>
             
              <Link to={`/beers/${beer._id}`}>View Details</Link>
              </div> 
            </li>
          ))}
        </ul>
        </div>
    )
}

export default AllBeersPage;
