import './App.css';
import PlantList from "../src/components/PlantList"
import {plants} from './data.json'
import Plant from "./components/Plant"

function App() {
  console.log(plants);
  return (
    <div className="App">
      <PlantList />
      <Plant plant={plants[0]} />
    </div>
  );
}

export default App;
