import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { convertBufferToBase64 } from "../../utils/imageComponent";

function ProfileEdit(props) {

    const currDate = new Date().toISOString().split("T")[0];
    const profileImg = convertBufferToBase64(props.userCred.ProfilePic?.data);

    const [ProfilePic, setProfilePic] = useState(props.userCred.ProfilePic);
    const [updateProfile, setUpdateProfile] = useState({
        googleID: props.userCred.googleID || "",
        name: props.userCred.name || "",
        FirstName: props.userCred.FirstName || "",
        LastName: props.userCred.LastName || "",
        email: props.userCred.email || "",
        ProfilePic: ProfilePic,
        dob: props.userCred.dob || "",
        CollegeName: props.userCred.CollegeName || "",
        course: props.userCred.course || "",
        department: props.userCred.department || "",
        CollegeEmail: props.userCred.CollegeEmail || "",
        PersonalEmail: props.userCred.PersonalEmail || "",
        MobileNo: props.userCred.MobileNo || "",
        CourseStartDate: props.userCred.CourseStartDate || "",
        CourseEndDate: props.userCred.CourseEndDate || "",
        CurrentYear: props.userCred.CurrentYear || "",
        CurrentSemester: props.userCred.CurrentSemester || "",
        CGPA: props.userCred.CGPA || "",
        GithubUsername: props.userCred.GithubUsername || "",
        LinkedinUsername: props.userCred.LinkedinUsername || "",
        LeetcodeUsername: props.userCred.LeetcodeUsername || "",
        GeeksforgeeksUsername: props.userCred.GeeksforgeeksUsername || "",
    });




    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'dob') {
            if (new Date(value) > new Date(currDate)) {
                return;
            }
        }

        if (name === 'MobileNo') {
            if (value.length > 10) {
                return;
            }
        }

        setUpdateProfile({
            ...updateProfile,
            [name]: value,
        });
    };

    const handleProfilePic = (event) => {
        const img = event.target.files[0];
        if (img) {

            const maxAllowSize = 2.6*1024*1024;
            if(img.size>maxAllowSize){
                alert("File is too large. Please upload an image less than 2.5MB.");
                event.target.value="";
                return;
            }


            const reader = new FileReader();
            reader.onload = (e) => {
                const base64Image = e.target.result.split(",")[1];
                try {

                    const byteArray = Uint8Array.from(atob(base64Image), (char) => char.charCodeAt(0));

                    setUpdateProfile((prevState) => ({
                        ...prevState,
                        ProfilePic: {
                            data: {
                                type: "Buffer",
                                data: Array.from(byteArray)
                            },
                            contentType: img.type
                        }
                    }));

                    console.log("Image uploaded successfully: ", img.name);
                } catch (err) {
                    console.error("Error decoding BAse64 image: ", err);
                    alert("Error uploading image. Please try again.");
                }
            };
            reader.readAsDataURL(img);
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        setUpdateProfile({
            ...updateProfile,
            // ProfilePic: ProfilePic,
        });

        try {
            const response = await fetch('/api/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateProfile),
            })

            if (response.ok) {
                const data = await response.json();
                console.log("Profile is updated.", data);
                alert("Profile updated succesfully.");
            } else {
                console.log("Error updating profile: ", response.statusText);
                alert("Error updating profile.");
            }
        } catch (err) {
            console.log("Error accessing backend: ", err);
            alert("Error accessing backend.");
        }

    }



    return (
        <>
            <h1>Profile Edit</h1>
            <img src={profileImg}  draggable="false" id="profileImage" />
            <Link to="/profile">Back</Link>
            <h1><b>Google ID :</b>{props.userCred.googleID}</h1>
            <div id="edit-profile">
                <form onSubmit={handleSubmit}>
                    <input type="file" accept="image/*" onChange={handleProfilePic} />
                    <label htmlFor="name">Preferred Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={updateProfile.name}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="first-name">First Name:</label>
                    <input
                        max={currDate}
                        type="text"
                        id="first-name"
                        name="FirstName"
                        value={updateProfile.FirstName}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="last-name">Last Name:</label>
                    <input
                        type="text"
                        id="last-name"
                        name="LastName"
                        value={updateProfile.LastName}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={updateProfile.email}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={updateProfile.dob}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="college-name">College Name:</label>
                    <input
                        type="text"
                        id="college-name"
                        name="CollegeName"
                        value={updateProfile.CollegeName}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="course">Course:</label>
                    <input
                        type="text"
                        id="course"
                        name="course"
                        value={updateProfile.course}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        value={updateProfile.department}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="college-email">College Email:</label>
                    <input
                        type="email"
                        id="college-email"
                        name="CollegeEmail"
                        value={updateProfile.CollegeEmail}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="personal-email">Personal Email:</label>
                    <input
                        type="email"
                        id="personal-email"
                        name="PersonalEmail"
                        value={updateProfile.PersonalEmail}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="mobile-no">Mobile No:</label>
                    <input
                        type="tel"
                        id="mobile-no"
                        name="MobileNo"
                        value={updateProfile.MobileNo}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="course-start-date">Course Start Date:</label>
                    <input
                        type="date"
                        id="course-start-date"
                        name="CourseStartDate"
                        value={updateProfile.CourseStartDate}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="course-end-date">Estimated Course End Date:</label>
                    <input
                        type="date"
                        id="course-end-date"
                        name="CourseEndDate"
                        value={updateProfile.CourseEndDate}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="current-year">Current Year:</label>
                    <input
                        type="number"
                        id="current-year"
                        name="CurrentYear"
                        value={updateProfile.CurrentYear}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="current-semester">Current Semester:</label>
                    <input
                        type="number"
                        id="current-semester"
                        name="CurrentSemester"
                        value={updateProfile.CurrentSemester}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="cgpa">CGPA:</label>
                    <input
                        type="number"
                        id="cgpa"
                        name="CGPA"
                        value={updateProfile.CGPA}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="github-username">GitHub Username:</label>
                    <input
                        type="text"
                        id="github-username"
                        name="GithubUsername"
                        value={updateProfile.GithubUsername}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="linkedin-username">LinkedIn Username:</label>
                    <input
                        type="text"
                        id="linkedin-username"
                        name="LinkedinUsername"
                        value={updateProfile.LinkedinUsername}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="leetcode-username">LeetCode Username:</label>
                    <input
                        type="text"
                        id="leetcode-username"
                        name="LeetcodeUsername"
                        value={updateProfile.LeetcodeUsername}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="geeksforgeeks-username">GeeksForGeeks Username:</label>
                    <input
                        type="text"
                        id="geeksforgeeks-username"
                        name="GeeksforgeeksUsername"
                        value={updateProfile.GeeksforgeeksUsername}
                        onChange={handleChange}
                    /><br /><br />

                    <input type="submit" value="Save" />
                </form>
            </div>

        </>
    )
}

export default ProfileEdit;