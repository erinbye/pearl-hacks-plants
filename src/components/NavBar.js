const NavBar = ({setPage}) => {

    const onClick = (page) => {
        setPage(page);
    }

    return (
        <div>
            <button onClick={() => onClick("Home")}>Home</button>
            <button onClick={() => onClick("My Plants")}>My Plants</button>
            <button onClick={() => onClick("Explore")}>Explore</button>
        </div>
    )    
}

export default NavBar