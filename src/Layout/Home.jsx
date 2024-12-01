

function Home(props) {

    const profile = `/profile-pics/${props.userCred.googleID}`;

    return (
        <>
            <main>
                <h1>Welcome, {props.userCred.name}</h1>
                <img src={profile} draggable="false" id="profileImage"/>
            </main>
        </>
    )
}

export default Home;