import React from "react";
import logo_icon from "./assets/logo-png.ico";

const Loading = () => {
  return (
    <div style={styles.container}>
      <img
        src={logo_icon} 
        alt="Logo"
        style={styles.logo}
      />
      <h1 style={styles.title}>AcadSync</h1>
      <p style={styles.quote}>"Success is the sum of small efforts, repeated day in and day out."</p>
      <div style={styles.loader}></div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0D1B2A",
    color: "#FFFFFF",
  },
  logo: {
    width: "120px",
    height: "120px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  quote: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: "30px",
    maxWidth: "80%",
  },
  loader: {
    border: "5px solid #282828",
    borderTop: "5px solid #1DB954",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite",
  },
};

export default Loading;
