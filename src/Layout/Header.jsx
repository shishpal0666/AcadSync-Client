import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav>
            <div id="features" >
            
                <Link to="/">Home</Link> 
                <Link to="/academics">Academics</Link>
                <Link to="/cgpa-calculator">CGPA Calculator</Link>
                {/* <Link to="/external-courses">External Courses</Link> */}
                {/* <Link to="/other-files">Other Files</Link> */}
                <Link to="/profile">Profile</Link>
                {/* <Link to="/projects">Projects</Link> */}
                {/* <Link to="/results">Results</Link> */}
                <Link to="/resumebuilder">Resume Score</Link>
                <Link to="/skills">Skills</Link>
                {/* <Link to="/timetable">Time Table</Link> */}
                {/* <Link to="/work-experience">Work Experience</Link> */}

            </div>
            <button onClick={props.logout}>Logout</button>
        </nav>
    )
}

export default Header;