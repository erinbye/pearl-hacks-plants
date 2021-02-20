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
            const {id, name, level, water, sunlight, fertilizer, picture} = plantData
            return (
              <ul>
                <Plant
                  key={id}
                  name={name}
                  level={level}
                  water={water}
                  sunlight={sunlight}
                  fertilizer={fertilizer}
                  picture={picture}
                />
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
