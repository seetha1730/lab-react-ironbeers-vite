import React from "react";
import { Routes, Route,useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";


function App() {
  return (

      <div className="App">
        <h1>LAB | React IronBeers</h1>


        <Routes>
          <Route path="/beers/:id" element={<BeerDetailsPage  />} />
          <Route path="/beers" element={<AllBeersPage/>} />
          <Route path="/random-beer" element={<RandomBeerPage/>} />
          <Route path="/new-beer" element={<AddBeerPage/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
   
  );
}

export default App;
