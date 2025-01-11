import { convertBufferToBase64 } from "../utils/imageComponent";

function Home(props) {

    const base64Image = convertBufferToBase64(props.userCred.ProfilePic?.data);

    return (
        <>
            <main>
                <h1>Welcome, {props.userCred.name}</h1>

                <img
                    src={base64Image}
                    draggable="false"
                    id="profileImage"
                    alt={`${props.userCred.name}'s profile`}
                />

            </main>
        </>
    )
}

export default Home;