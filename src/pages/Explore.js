import PlantList from "../components/PlantList"

const Explore = ({plants, setPlantId, setPage}) => {
    return (
        <PlantList plantData={plants} page="Explore" setPlantId={setPlantId} setPage={setPage}/>
    )
}

export default Explore