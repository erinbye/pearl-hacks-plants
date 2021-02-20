import './App.css';
import PlantList from "../src/components/PlantList"
import {plants} from './data.json'

function App() {
  console.log(plants);
  return (
    <div className="App">
      <PlantList />
    </div>
  );
}

export default App;
