import './App.css';
import {plants} from './data.json'
import Plant from "./components/Plant"

function App() {
  console.log(plants);
  return (
    <div className="App">
      <Plant plant={plants[0]} />
    </div>
  );
}

export default App;
