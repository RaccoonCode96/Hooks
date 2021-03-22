import React, {useState, useEffect, useRef} from "react";
import './App.css';

const useClick = (onClick) => {
  const ref = useRef();
  
  useEffect(() => {
    const element = ref.current;
    if(element){
      element.addEventListener("click", onClick);
    }
    return () => {
      if(element) {
        element.removeEventListener("click", onClick); 
      }
      // component가 mount 되었고 나중에 componentWIllunmount 되면 event를 정리해줘야함
    }
  }, [onClick]); // [] 옵션을 통해서 무언가 update 되어도 다시 update가 안되게 함
  if (typeof onClick !== "function") {
    return;
  }
  return ref;
};

function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};




export default App;
