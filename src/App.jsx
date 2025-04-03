import React from "react";
 import Pg1 from "./pages/page1/Pg1";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pg2 from "./pages/page2/Pg2";
import Pg3 from "./pages/page3/Pg3";
import Pg4 from "./pages/page4,5,6,7/Pg4";
import Pg8 from "./pages/page8/Pg8";

function getPage() {
  switch (window.location.pathname) {
    case "/pg2":
      return <Pg2 />;
    case "/pg3":
      return <Pg3 />;
    case "/pg4":
      return <Pg4/>;
    case "/pg8":
      return <Pg8/>;
    default:
      return <Pg1 />;
  }
}

function App(){
  return(
    <div>{getPage()}</div>
  )
}

export default App