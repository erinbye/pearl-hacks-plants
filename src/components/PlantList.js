import React from "react";
import "../App.css"

// using table formatting
export const PlantList = ({plantData, page, setPlantId, setPage}) => {

  const onClickPlant = (id) => {
    setPlantId(id)
    setPage("Plant")
  }
  
  return (
    <div class="list">
      <h1>{page}</h1>
      <ul>
        {plantData.length ? (
          plantData.map((plantData) => {
            const {id, name, picture} = plantData
            return (
              <li key={id}>
                <a onClick={() => onClickPlant(id)}><img src={picture}></img></a>
                <h3>{name}</h3>
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
