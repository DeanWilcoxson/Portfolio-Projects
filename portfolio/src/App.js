import React from "react";
import { AppBox } from "./Aesthetics";
import HeaderSection from "./components/Header";
import HeroSection from "./components/Hero";
const App = () => {
  return (
    <AppBox>
      <HeaderSection />
      <HeroSection />
    </AppBox>
  );
};

export default App;
