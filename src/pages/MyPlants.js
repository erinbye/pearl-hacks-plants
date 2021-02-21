import PlantList from "../components/PlantList"

const MyPlants = ({plants, setPlantId, setPage}) => {
    return (
        <PlantList plantData={plants} page="My Plants" setPlantId={setPlantId} setPage={setPage}/>
    )
}

export default MyPlants