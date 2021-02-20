import water from "../images/water-drop.jpg"
import sun from "../images/sun.png"
import fertilizer from "../images/fertilizer.png"

const Plant = ({plant}) => {
    plant = {
        name: "Aluminum Plant",
        level: "Easy",
        water: "once every week",
        sunlight: "bright light",
        fertilizer: "every two weeks",
        picture: "https://www.guide-to-houseplants.com/images/aluminum-plant-2.jpg",
        owned: false

    }
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