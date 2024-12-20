import logo from "./assets/logo-transparent-png.png";
import Footer from "./Layout/Footer";

function AcadSync(props){
    const date = new Date();
    const currYear = date.getFullYear();
    const handelLogin = ()=>{
        window.location.href = props.LoginUrl;
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
            <Footer/>
        </>
    )
}


export default AcadSync;