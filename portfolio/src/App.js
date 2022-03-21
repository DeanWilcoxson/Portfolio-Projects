import React from "react";
import { AppBox } from "./Aesthetics";
import HeaderSection from "./components/Header/HeaderSection";
import HeroSection from "./components/Hero/HeroSection";
const App = () => {
  return (
    <AppBox>
      <HeaderSection />
      <HeroSection />
    </AppBox>
  );
};

export default App;
