import Header from "./Header";
import Footer from "./Footer";
import Main from "./main";

function Home(props){

    return (
        <>
            <Header logout={props.logout} />
            <Main userCred={props.userCred} />          
            <Footer/>
        </>
    )
}

export default Home;