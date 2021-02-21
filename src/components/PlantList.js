import React from "react";

// using table formatting
export const PlantList = ({plantData, page}) => {
  
  return (
    <div class="list">
      <h1>{page}</h1>
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
