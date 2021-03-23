import React, { useEffect } from "react";
import './App.css';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const {clientY} = event;
    if (clientY <= 0) { // 밖으로 나가는 종류가 2가지임 위로 아래로, 위로만 나가는 것을 인식하고 싶을 때
      onBefore();
    }
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle)
    // componentWIllUnmount
    return () => document.removeEventListener("mouseleave", handle);
  }, []); // [] 단 한번만 실행
  // 유효성 검사
  if(!onBefore || typeof onBefore !== "function") {
    return;
  };
}

function App() {
    const begForLife = () => console.log("Pls don't leave!");
    useBeforeLeave(begForLife);
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  };
  
  export default App;