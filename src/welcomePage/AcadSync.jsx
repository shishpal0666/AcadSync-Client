import logo from "../assets/logo-transparent-png.png";

function Welcome(props){
    const date = new Date();
    const currYear = date.getFullYear();
    const handelLogin = ()=>{
        window.location.href = props.loginurl;
    }

    return (
        <>
            <nav>
                <img src={logo} height={"50px"} />
            </nav>
            <div>
                <button onClick={handelLogin} >Google Login</button>
            </div>
            <hr></hr>
            <footer>© Copyright {currYear} AcadSync</footer>
        </>
    )
}


export default Welcome;