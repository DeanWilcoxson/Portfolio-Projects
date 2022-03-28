import React from "react";
import { AppBox } from "./Aesthetics";
import HeaderSection from "./components/Header";
import HeroSection from "./components/Hero";
import ProjectSection from "./components/Projects";
const App = () => {
  return (
    <AppBox>
      <HeaderSection />
      <HeroSection />
      <ProjectSection />
    </AppBox>
  );
};

export default App;
