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
            return (
              <ul>
                <Plant
                  key={plantData.id}
                  name={plantData.name}
                  level={plantData.level}
                  water={plantData.water}
                  sunlight={plantData.sunlight}
                  fertilizer={plantData.fertilizer}
                  picture={plantData.picture}
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
