import { Link } from "react-router-dom";
import { convertBufferToBase64 } from "../../utils/imageComponent";

function Profile(props) {

    const userSince = new Date(props.userCred.userCreation.data);
    const userSinceString = userSince.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const base64Image =convertBufferToBase64(props.userCred.ProfilePic?.data);

    return (
        <>
            <h1>Profile</h1>
            <img src={base64Image} draggable="false" id="profileImage" />
            <Link to="/profile/edit" >Edit</Link>

            <h1><b>Google ID :</b> {props.userCred.googleID}</h1>
            <h1><b>Name :</b> {props.userCred.name}</h1>
            <h1><b>First Name:</b> {props.userCred.FirstName}</h1>
            <h1><b>Last Name :</b> {props.userCred.LastName}</h1>
            <h1><b>Email :</b> {props.userCred.email}</h1>
            <h1><b>Date of Birth :</b> {props.userCred.dob}</h1>
            <h1><b>College Name :</b> {props.userCred.CollegeName}</h1>
            <h1><b>Course :</b> {props.userCred.course}</h1>
            <h1><b>Department :</b> {props.userCred.department}</h1>
            <h1><b>College Email :</b> {props.userCred.CollegeEmail}</h1>
            <h1><b>Personal Email :</b> {props.userCred.PersonalEmail}</h1>
            <h1><b>Mobile No :</b> {props.userCred.MobileNo}</h1>
            <h1><b>Course Start Date :</b> {props.userCred.CourseStartDate}</h1>
            <h1><b>Course End Date :</b> {props.userCred.CourseEndDate}</h1>
            <h1><b>Current Year :</b> {props.userCred.CurrentYear}</h1>
            <h1><b>Current semester :</b> {props.userCred.CurrentSemester}</h1>
            <h1><b>CGPA :</b> {props.userCred.CGPA}</h1>
            <h1><b>Github Username :</b> {props.userCred.GithubUsername}</h1>
            <h1><b>LinkedIn Username :</b> {props.userCred.LinkedinUsername}</h1>
            <h1><b>Leetcode Username :</b> {props.userCred.LeetcodeUsername}</h1>
            <h1><b>GeeksforGeeks Username :</b> {props.userCred.GeeksforgeeksUsername}</h1>
            <h1><b>User Since :</b> {userSinceString}</h1>
            <h1><b>Created By :</b> {props.userCred.userCreation.createdBy}</h1>

        </>
    )
}


export default Profile;