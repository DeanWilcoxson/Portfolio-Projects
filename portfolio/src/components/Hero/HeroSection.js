import React from "react";
import {
  HeroContainer,
  HeroBox,
  HeroTitle,
  HeroDesc,
  HeroList,
  HeroItem,
} from "./HeroAesthetics";
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBox>
        <HeroTitle>Hello!</HeroTitle>
        <HeroDesc>
          My name is Dean Wilcoxson, I am a Fullstack Developer and a Father.
          I have nearly three years experience writing code. 
        </HeroDesc>
        <HeroList>
          <HeroItem></HeroItem>
        </HeroList>
      </HeroBox>
    </HeroContainer>
  );
};

export default HeroSection;
