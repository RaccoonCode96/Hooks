import React, { useState } from "react";
import './App.css';

const content = [
    {
      tab: "Section 1",
      content: "I'm the content of the Section 1"
    },
    {
      tab: "Section 2",
      content: "I'm the content of the Section 2"
    }
  ];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

function App() {
    const {currentItem, changeItem} = useTabs(0, content); 
    // 그냥 tabs로 받아오면 tabs.currentItem으로 접근해야 되서 변수명을 더 쓰게 됨
    return (
      <div className="App">
        {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button> 
        // changeItem 은 setCurrentIndex이므로 안에 무언가 넣으면 그값으로 useState에 넣어 변경함
        ))}
        <div>{currentItem.content}</div>
      </div>
    );
  };
  
  
  export default App;