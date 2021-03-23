import React from "react";
import './App.css';

const useConfirm = (message = "", onConfirm, onCancel) => {
  // 유효성 검사 (Validator)
  if(!onConfirm || typeof onConfirm !== "function"){ 
      // 없거나, 함수가 아니면 빠져나옴 
      // 즉, 있고, 함수일때만 실행된다는 얘기
    return;
  }
  if(onCancel && typeof onCancel !== "function"){ 
      // (선택사항) 있고 함수가 아닐때만 나온다. 
      // 즉, 없어도 되고 만약 있다면 function 이어야 만 실행됨
    return;
  }
  // 알림창 및 해당 콜백 함수 실행
  const confirmAction = () => {
    if(window.confirm(message)) { 
      // 주의! window를 써줘야 confirm이 무슨 함수인지 인지함
      onConfirm();
    } else {
      onCancel();
    }
  }
  return confirmAction;
};

function App() {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted")
    const confirmDelete = useConfirm("Are you sure ?", deleteWorld, abort);
    return (
      <div className="App">
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
    );
  };
  
  export default App;
  