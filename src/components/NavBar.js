import Logo from "../images/logo.svg"
import "../pages/Main.css"

const NavBar = ({setPage}) => {

    const onClick = (page) => {
        setPage(page);
    }

    return (
        <div>
            <h1><img className="disp" src={Logo} width="100" height="100" alt="Home Page Image"/></h1>
            <h2 className="title">Bud Buddy</h2>
            <button onClick={() => onClick("Home")}>Home</button>
            <button onClick={() => onClick("My Plants")}>My Plants</button>
            <button onClick={() => onClick("Explore")}>Explore</button>
        </div>
    )    
}

export default NavBar