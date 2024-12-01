import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AcadSync from "./AcadSync";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Layout/Home";
import Academics from "./components/Academics/Academics";
import CGPACalculator from "./components/CGPACalculator/CGPACalculator";
import ExternalCources from "./components/ExternalCourses/ExternalCources";
import OtherFiles from "./components/OtherFiles/OtherFiles";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Results from "./components/Results/Results";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";
import Skills from "./components/Skills/Skills";
import TimeTable from "./components/TimeTable/TimeTable";
import WorkExperience from "./components/WorkExperience/WorkExperience";


function Auth({ loggedin, OAuthUrl, handleLogout, userCredentials }) {

  if (loggedin === null) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }


  if (!loggedin) {
    return (
      <AcadSync LoginUrl={OAuthUrl} />
    )
  } else {
    return (
      <>
        <Header logout={handleLogout} />
        <Home userCred={userCredentials} />
        <Footer />
      </>
    )
  }

}


function ProtectedRoutes({ loggedin, children, handleLogout }) {
  if (!loggedin) {
    return (
      <Navigate to="/" />
    )
  }
  return (
    <>
      <Header logout={handleLogout} />
      {children}
      <Footer />
    </>
  )
}


function App() {
  const [loggedin, setLoggedin] = useState(null);
  const [userCredentials, setUserCredentials] = useState({});
  const OAuthUrl = '/api/auth/google';

  useEffect(() => {
    fetch('/api/loggedin', { credentials: 'include' }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch');
        }
      }
    ).then(
      (data) => {
        setUserCredentials(data);
        setLoggedin(true);

      }
    ).catch(
      (err) => {
        console.log('Error fetching user data:', err);
        setLoggedin(false);

      })
  }, []);


  const handleLogout = () => {
    fetch('/api/logout', { credentials: 'include', method: 'GET' }).then(
      (res) => {
        if (res.ok) {
          setLoggedin(false);
          setUserCredentials({});

        } else {
          console.log("logout error");
        }
      }
    ).catch((err) => {
      console.log("Error while logout:", err);
    }
    );
  };




  return (
    <>
      <Routes>
        <Route path="/" element={
          <Auth loggedin={loggedin} OAuthUrl={OAuthUrl} handleLogout={handleLogout} userCredentials={userCredentials} />
        } />

        <Route path="/academics" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <Academics loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/projects" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <Projects loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/results" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <Results loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/timetable" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <TimeTable loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/resumebuilder" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <ResumeBuilder loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/cgpa-calculator" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <CGPACalculator loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/external-courses" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <ExternalCources loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/work-experience" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <WorkExperience loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/skills" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <Skills loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/other-files" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <OtherFiles loggedin={loggedin} />
          </ProtectedRoutes>
        } />

        <Route path="/profile" element={
          <ProtectedRoutes handleLogout={handleLogout} loggedin={loggedin} >
            <Profile loggedin={loggedin} />
          </ProtectedRoutes>
        } />

      </Routes>
    </>
  )
}

export default App
