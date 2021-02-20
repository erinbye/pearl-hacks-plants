import waterPic from "../images/water-drop.jpg";
import sunPic from "../images/sun.png";
import fertilizerPic from "../images/fertilizer.png";

const Plant = ({ key, name, level, water, sunlight, fertilizer, picture }) => {
  return (
    // <div>
    //     <h1>{plant.name}</h1>
    //     <h2>Level: {plant.level}</h2>

    //     <h3><img src={water} alt="water" width="50" height="50"/>: {plant.water}</h3>
    //     <h3><img src={sun} alt="sun" width="50" height="50"/>: {plant.sunlight}</h3>
    //     <h3><img src={fertilizer} alt="fertilizer" width="50" height="50"/>: {plant.fertilizer}</h3>
    //     <img src={plant.picture}/>
    //     <div/>
    //     <button>Add {plant.name} to My Plants</button>
    // </div>
    <li key={key}>
      <img src={picture}></img>
      <h3>{name}</h3>
      <h3>{level}</h3>
      <h3><img src={waterPic} alt="water" width="50" height="50" /> {water} </h3>
      <h3><img src={sunPic} alt="sun" width="50" height="50" />{sunlight} </h3>
      <h3><img src={fertilizerPic} alt="fertilizer" width="50" height="50" /> {fertilizer} </h3>
      <button>Add {name} to My Plants</button>
    </li>
  );
};

export default Plant;
