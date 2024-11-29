import AcadSync from "./AcadSync";
import { useState, useEffect } from "react";
import Home from "./Home";

function Auth(){
    
  const [loggedin,setLoggedin] = useState(true);
  const [userCredentials,setUserCredentials] = useState({});
  const OAuthUrl= '/api/auth/google';

  useEffect(()=>{
    fetch('/api/loggedin',{credentials: 'include'}).then(
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
    fetch('/api/logout',{credentials:'include',method:'GET'}).then(
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
      <Home userCred={userCredentials} logout={handleLogout} />
    )
  }else{
    return(
      <AcadSync LoginUrl={OAuthUrl} />
    )
  }
}


export default Auth;