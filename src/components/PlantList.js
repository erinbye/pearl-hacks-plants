import React from "react";
import "./PlantList.css"

// using table formatting
export const PlantList = ({plantData, page, setPlantId, setPage}) => {

  const onClickPlant = (id) => {
    setPlantId(id)
    setPage("Plant")
  }

  const sizeOfImgs = 200;
  
  return (
    <div className="list">
      <h1>{page}</h1>
      {page === "My Plants" ? (
          <ul className="plant-items">
          {plantData.length ? (
            plantData.filter( (plant) => plant.owned === true )
              .map((plant) => {
              const {id, name, picture} = plant
              return (
                <div className="plant-item" key={id}>
                  <a onClick={() => onClickPlant(id)}><img src={picture} width={sizeOfImgs} height={sizeOfImgs}></img></a>
                  <h3>{name}</h3>
                </div>
              );
          })
          ) : (
            <p>No Results to Display</p>
          )}
        </ul>
        ) : (
          <ul className="plant-items">
          {plantData.length ? (
            plantData.map((plantData) => {
              const {id, name, picture} = plantData
              return (
                <div className="plant-item" key={id}>
                  <a onClick={() => onClickPlant(id)}><img src={picture} width={sizeOfImgs} height={sizeOfImgs}></img></a>
                  <h3>{name}</h3>
                </div>
              );
          })
          ) : (
            <p>No Results to Display</p>
          )}
        </ul>
        )
      }
      
  </div>
  )
};

export default PlantList;
