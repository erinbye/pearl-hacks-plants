import './App.css';
import {plants} from './data.json'
import { useState } from 'react'
import NavBar from "./components/NavBar"
import Main from "./pages/Main"
import MyPlants from './pages/MyPlants'
import Explore from "./pages/Explore"
import Plant from "./components/Plant"


function App() {
  const [page, setPage] = useState("Home");
  const [plantId, setPlantId] = useState(-1);

  return (
    <div className="App">
      <NavBar setPage={setPage}></NavBar>
      {page === "Plant" ? <Plant plantId={plantId}/> :
        page === "Home" ? <Main/> : 
        page === "My Plants" ? <MyPlants plants={plants} setPlantId={setPlantId} setPage={setPage}/> :
        <Explore plants={plants} setPlantId={setPlantId} setPage={setPage}/>
      }
    </div>
      
  );
}

export default App;
