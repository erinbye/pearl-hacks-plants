import React from "react";
import {data} from "../API/plantData.json"
// using table formatting
export const PlantList = () => {
  const plantData = data
  console.log(plantData)
    
  return (
    <div class="list">
      <h1>Plants</h1>
      <ul>
        {plantData.length ? (
          plantData.map(({ id, name, level, water, sunlight, fertilizer, picture}) => {
            return (
            <li key={id}>
                <img src={picture} alt={`picture of ${name}`}></img>
                  {/* if isowned = true show empty favorite button? */}
                <p>{ name }</p>
                <p>{ level }</p>
                <p>{ water }</p>
                <p>{ sunlight }</p>
                <p>{fertilizer}</p>
            </li>
          );
        })
        ) : (
          <p>No Results to Display</p>
          )}
      </ul>
  </div>
  )
};

export default PlantList;
