import './App.css';
//import {plants} from './data.json'
import { useState } from 'react'
import NavBar from "./components/NavBar"
import Main from "./pages/Main"
import MyPlants from './pages/MyPlants'
import Explore from "./pages/Explore"
import Plant from "./components/Plant"

const plants = [
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
  const [page, setPage] = useState("Home");
  const [plantId, setPlantId] = useState(-1);

  return (
    <div className="App">
      <NavBar setPage={setPage}></NavBar>
      {page === "Plant" ? <Plant plantId={plantId} plants={plants} setPage={setPage}/> :
        page === "Home" ? <Main page={setPage}/> : 
        page === "My Plants" ? <MyPlants plants={plants} setPlantId={setPlantId} setPage={setPage}/> :
        <Explore plants={plants} setPlantId={setPlantId} setPage={setPage}/>
      }
    </div>
  );
}

export default App;
