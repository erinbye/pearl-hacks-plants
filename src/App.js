import './App.css';
import {plants} from './data.json'
import { useState, useEffect } from 'react'
import NavBar from "./components/NavBar"
import Main from "./pages/Main"
import MyPlants from './pages/MyPlants'
import Explore from "./pages/Explore"
import Plant from "./components/Plant"

const plantDemo = [
  {
      id: 1,
      name: "Aluminum Plant",
      level: "Easy",
      water: "once every week",
      sunlight: "bright light",
      fertilizer: "every two weeks",
      picture: "https://www.guide-to-houseplants.com/images/aluminum-plant.jpg",
      owned: false
  },
  {
    id: 2,
    name: "Baby Rubber Plant",
    level: "Easy",
    water: "once every week",
    sunlight: "bright, indirect light",
    fertilizer: "every two weeks",
    picture: "https://www.guide-to-houseplants.com/images/peperomia-obtusifolia-window.jpg",
    owned: false
  },
  {
    id: 3,
    name: "Caladium Plant",
    level: "Medium",
    water: "once every week",
    sunlight: "bright, indirect light",
    fertilizer: "every two weeks",
    picture: "https://www.guide-to-houseplants.com/images/caladium-leaves.jpg",
    owned: false
  },
  {
    id: 4,
    name: "Dragon Tree",
    level: "Medium",
    water: "once every week",
    sunlight: "bright, indirect light",
    fertilizer: "every two weeks",
    picture: "https://www.guide-to-houseplants.com/images/dragon-tree.jpg",
    owned: false
  }
]

function App() {
  const [plantId, setPlantId] = useState(-1);
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
      {page === "Plant" ? <Plant plantId={plantId} plants={filteredPlants} setPage={setPage}/> :
        page === "Home" ? <Main/> : 
        page === "My Plants" ? <MyPlants handleSearch={handleSearch} plants={plants} setPlantId={setPlantId} setPage={setPage}/> :
        <Explore handleSearch={handleSearch} plants={filteredPlants} setPlantId={setPlantId} setPage={setPage}/>
      }
    </div>
  );
}

export default App;
