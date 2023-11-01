import axios from "axios"
import { Link,useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import HomeImg from "../assets/home-icon.png"
function BeerDetailsPage() {
      
    const [beer ,setBeer] = useState(null)
    let { id } = useParams();
    useEffect(() => {
       
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
          .then((response) => {
            console.log(response.data);
            setBeer(response.data);

          })
          .catch((error) => {
            console.error("Error fetching beers:", error);
          });
      }, [id]);
      if (!beer) {
        return <div>Loading...</div>;
      }
    return (
        <div style={{"padding":"20px"}}>
        <Link to="/">
              <div style={{"background":"skyblue","textAlign":"center","padding":"10px","marginBottom":"20px"}}>
               <img src={HomeImg}/>
              </div>
              </Link>
            <div className="BeerDetailImg">
            <img  src={beer.image_url} alt={beer.name} />
            </div>
             <div className="BeerDetailContent" ><h1>{beer.name}<span>{beer.attenuation_level}</span></h1>
              <h3 style={{"color":"#d2d2d2"}}>{beer.tagline}<span>{beer.first_brewed}</span></h3>
              
             <p>{beer.description}</p>
             <p style={{"color":"#d2d2d2"}}>{beer.contributed_by}</p>

              </div> 
          
        </div>
        
    )
}

export default BeerDetailsPage;
