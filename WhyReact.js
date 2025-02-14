import React,{useState} from "react";

import Navbar from "./Navbar";
import Body from "./Body";

function WhyReact(){
  const [darkMode,setDarkMode]= useState(true);
  function toggle(){
    setDarkMode(prev=> !prev)
  }
  return(
    <div className="container">
      <Navbar darkMode={darkMode} toggle={toggle}/>
      <Body darkMode={darkMode} toggle={toggle}/>
    </div>
  )
}

export default WhyReact;

