import './App.css';
import {plants} from './data.json'
import { useState, useEffect } from 'react'
import NavBar from "./components/NavBar"
import Main from "./pages/Main"
import MyPlants from './pages/MyPlants'
import Explore from "./pages/Explore"


function App() {
  const [page, setPage] = useState("Home");
  // const [listedPlants, setListedPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
   useEffect(() => {
     setFilteredPlants(plants)
   }, []);
  
  const handleSearch = (search) => {
    const plantFilter = plants.filter((plant) => {
      if (
        plant.name.toLowerCase().includes(search.toLowerCase()) ||
        plant.name.toLowerCase().includes(search.toLowerCase())
      ) {
        return plant;
      }
    });
    setFilteredPlants(plantFilter);
  };
  return (
    <div className="App">
      <NavBar setPage={setPage}></NavBar>
      {page === "Home" ? (
        <Main />
      ) : page === "My Plants" ? (
        <MyPlants handleSearch={handleSearch} plants={filteredPlants} />
      ) : (
        <Explore handleSearch={handleSearch} plants={filteredPlants} />
      )}
    </div>
  );
}

export default App;
