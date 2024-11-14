import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Content from "./components/Content";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="index.css" rel="stylesheet" />
      <title>Portfolio</title>

      <div className="container">
        <Header />
        <Title />
        <Content />
        <Content
          text="I'm Avriel Tirza Priskila Parengkuan, an 18-year-old student at Universitas Klabat..."
          imageSrc="/img/el.jpg"
          altText="Image 2"
        />
        <Skill />
        <Project />
      </div>

      <Footer />
    </div>
  );
};

export default App;
