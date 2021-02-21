import './App.css';
import {plants} from './data.json'
import { useState } from 'react'
import NavBar from "./components/NavBar"
import Main from "./pages/Main"
import MyPlants from './pages/MyPlants'
import Explore from "./pages/Explore"


function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <NavBar setPage={setPage}></NavBar>
      {page === "Home" ? <Main/> : 
        page === "My Plants" ? <MyPlants/> :
        <Explore plants={plants}/>
      }
    </div>
      
  );
}

export default App;
