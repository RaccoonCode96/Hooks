import React, {useState, useEffect, useRef} from "react";
import './App.css';

const useClick = (onClick) => {
  const ref = useRef();
  
  useEffect(() => {
    // componentDIdmount, componentDidUpdate([]옵션으로 udpate는 사용X) 상태시 실행 (Event 추가)
    const element = ref.current;
    if(element){
      element.addEventListener("click", onClick);
    }
    // componentWIllunmout시 실행 (Event 정리)
    return () => {
      if(element) {
        element.removeEventListener("click", onClick); 
      };
    };
  }, [onClick]); 
  // [] 옵션을 통해서 무언가 update 되어도 다시 update가 안되게 함
  
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
