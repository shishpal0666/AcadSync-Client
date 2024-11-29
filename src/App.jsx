import Welcome from "./welcomePage/AcadSync";
import { useState, useEffect } from "react";

function App() {

  const [loggedin,setLoggedin] = useState(true);
  const [userCredentials,setUserCredentials] = useState({});
  const backendurl = "http://localhost:3000";
  const OAuthUrl= `${backendurl}/auth/google`;
  const LoggedInUrl= `${backendurl}/loggedin`;
  const logoutUrl= `${backendurl}/logout`;

  useEffect(()=>{
    fetch(LoggedInUrl,{credentials: 'include'}).then(
      (response)=> {
        if(response.ok){
          return response.json();
        }else{
          throw new Error('Failed to fetch');
        }
      }
    ).then(
      (data)=>{
        setUserCredentials(data);
        setLoggedin(true);
      }
    ).catch(
      (err)=>{
      console.log('Error fetching user data:',err);
      setLoggedin(false);
    })
  },[]);


  const handleLogout = ()=>{
    fetch(logoutUrl,{credentials:'include',method:'GET'}).then(
      (res)=>{
        if(res.ok){
          setLoggedin(false);
          setUserCredentials({});
        }else{
          console.log("logout error");
        }
      }
    ).catch((err)=>{
        console.log("Error while logout:",err);
      }
    );
  };


  if(loggedin){
    return (
      <>
        <h1>Welcome, {userCredentials.displayName}</h1>
        <button onClick={handleLogout}>Logout</button>
      </>
    )
  }else{
    return(
      <Welcome loginurl={OAuthUrl} />
    )
  }

}

export default App
