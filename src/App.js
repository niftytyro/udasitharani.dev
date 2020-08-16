import React, { useRef } from "react";
import Introduction from "./Components/Introduction/Introduction";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyWork from "./Components/MyWork/MyWork";
import "./App.css";
import AppReferenceContext from "./context/AppReferenceContext";

const App = () => {
  const AboutMeRef = useRef(null);
  const MyWorkRef = useRef(null);
  const appReferenceContext = { AboutMeRef, MyWorkRef };
  return (
    <AppReferenceContext.Provider value={appReferenceContext}>
      <div className="App">
        <Introduction />
        <AboutMe />
        <MyWork />
      </div>
    </AppReferenceContext.Provider>
  );
};

export default App;
