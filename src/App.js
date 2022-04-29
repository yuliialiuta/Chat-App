import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./style.css";

const App= () => {  
  return (
    <div className="chatApp">
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default App;