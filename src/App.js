import React, { useRef } from "react";
import Introduction from "./Components/Introduction/Introduction";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyWork from "./Components/MyWork/MyWork";
import "./App.css";

const App = () => {
  const AboutMeRef = useRef(null);

  return (
    <div className="App">
      <Introduction />
      <AboutMe />
      <MyWork />
    </div>
  );
};

export default App;
