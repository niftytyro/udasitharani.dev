import React from "react";
import Introduction from "./Components/Introduction/Introduction";
import AboutMe from "./Components/AboutMe/AboutMe";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Introduction />
      <AboutMe />
    </div>
  );
};

export default App;
