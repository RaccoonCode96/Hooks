import React, {useRef} from "react";
import './App.css';


const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = isFull => {
    if(callback && typeof callback === "function") {
      callback(isFull);
    };
  };

  const triggerFull = () => {
    if(element.current) {
      if(element.current.requestFullscreen){
        element.current.requestFullscreen();
      } else if(element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if(element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if(element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };

  const exitFull = () => {
    if (document.fullscreen === true) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    };
  };
  
  return {element, triggerFull, exitFull };
};

function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "We are small");
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{height: "1000vh"}}>
      <div ref={element}>
        <img alt="MacBook_img" src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};




export default App;
