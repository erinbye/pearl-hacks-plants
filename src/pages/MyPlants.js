import PlantList from "../components/PlantList"

const MyPlants = ({plants}) => {
    return (
        <PlantList plantData={plants} page="My Plants"/>
    )
}

export default MyPlants