import water from "../images/water-drop.jpg"
import sun from "../images/sun.png"
import fertilizer from "../images/fertilizer.png"
import {plants} from "../data.json"

const Plant = ({plantId}) => {
    const plant = plants.filter((plant) => plant.id === plantId)[0];
    console.log(plant);
    return (
        <div>
            <h1>{plant.name}</h1>
            <h2>Level: {plant.level}</h2>
            
            <h3><img src={water} alt="water" width="50" height="50"/>: {plant.water}</h3>
            <h3><img src={sun} alt="sun" width="50" height="50"/>: {plant.sunlight}</h3>
            <h3><img src={fertilizer} alt="fertilizer" width="50" height="50"/>: {plant.fertilizer}</h3>
            <img src={plant.picture}/>
            <div/>
            <button>Add {plant.name} to My Plants</button>
        </div>
    )
}

export default Plant