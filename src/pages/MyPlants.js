import PlantList from "../components/PlantList"
import SearchBar from "../components/SearchBar"
const MyPlants = ({plants, handleSearch}) => {
    return (
    <div>
        <SearchBar handleSearch={handleSearch}/>
        <PlantList plantData={plants} page="My Plants" />
    </div>
    )
}

export default MyPlants