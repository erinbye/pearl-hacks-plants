import PlantList from "../components/PlantList"
import SearchBar from "../components/SearchBar"

const Explore = ({ plants, handleSearch }) => {    
    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
            <PlantList  plantData={plants} page="Explore"/>
        </div>
    )
}

export default Explore