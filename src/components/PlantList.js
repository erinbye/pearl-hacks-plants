import React from "react";
import { plants } from "../data.json"
import Plant from "../components/Plant"
// using table formatting
export const PlantList = () => {
  const plantData = plants
  console.log(plantData.plants)
  
  return (
    <div class="list">
      <h1>Plants</h1>
      <ul>
        {plantData.length ? (
          plantData.map((plantData) => {
            const {id, name, picture} = plantData
            return (
              <ul>
                <li key={id}>
                  <img src={picture}></img>
                  <h3>{name}</h3>
                </li>
              </ul>
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
