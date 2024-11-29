

function Header(props){
    return (
        <nav>
            <button onClick={props.logout}>Logout</button>
        </nav>
    )
}

export default Header;