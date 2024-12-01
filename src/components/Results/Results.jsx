

function Results(props){
    const loggedinStatus = props.loggedin ? "logged in" : "not logged in";
    return (
        <h1>Results {loggedinStatus}</h1>
    )
}

export default Results;