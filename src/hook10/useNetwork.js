import React, {useState, useEffect } from "react";
import './App.css';

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  // navigator.onLine 은 true or false를 말해줌
  const handleChange = () => {
    if (typeof onChange === "function"){
      onChange(navigator.onLine)
    }
    setStatus(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, [status]);
  return status;
}

function App() {
    const handleNetworkChange = (online) => {
      console.log(online?"We just went online":"We are offline")
    }
    const onLine = useNetwork(handleNetworkChange);
    return (
      <div className="App">
        <h1>{onLine ? "Online" : "Offline"}</h1>
      </div>
    );
  };
  
  export default App;