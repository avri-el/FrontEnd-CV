import React from "react";
import Header from "./components/Header";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
