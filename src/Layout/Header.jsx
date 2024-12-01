import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav>
            <div id="features" >
                <a><Link to="/">Home</Link></a>
                <a><Link to="/academics">Academics</Link></a>
                <a><Link to="/cgpa-calculator">CGPA Calculator</Link></a>
                <a><Link to="/external-courses">External Courses</Link></a>
                <a><Link to="/other-files">Other Files</Link></a>
                <a><Link to="/profile">Profile</Link></a>
                <a><Link to="/projects">Projects</Link></a>
                <a><Link to="/results">Results</Link></a>
                <a><Link to="/resumebuilder">Resume Builder</Link></a>
                <a><Link to="/skills">Skills</Link></a>
                <a><Link to="/timetable">Time Table</Link></a>
                <a><Link to="/work-experience">Work Experience</Link></a>

            </div>
            <button onClick={props.logout}>Logout</button>
        </nav>
    )
}

export default Header;