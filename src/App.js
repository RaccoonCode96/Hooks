import React, {useState} from "react";
// import logo from './logo.svg';
import './App.css';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue); // initialValue -> value -> name
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true; // callback 함수의 조건에 맞게 떨어졌는지 확인하는 변수
    if (typeof validator === "function") {
      willUpdate = validator(value); // validator callback 함수가 들어 올거니까 이름을 맞춘거임
    }
    if (willUpdate) { // 검증이 되면 그때서야 value가 수정됨
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello!</h1>
      {/* <input placeholder="Name" value={name.value} /> */}
      <input placeholder="Name" value={name.value} onChange={name.onChange} /> 
      {/* <input placeholder="Name" {...name} />  */}
      {/* 위처럼 사용하면 name안에 있는 모든 것을 풀어줌 */}
    </div>
  );
}


export default App;
