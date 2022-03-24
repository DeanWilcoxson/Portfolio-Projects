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
        <HeroTitle>About Me:</HeroTitle>
        <HeroDesc>
          Three years ago, I was diagnosed with Congestive heart failure due to my prior intravenuos drug use. I am now recovering, three years sober, and have graduated an Associates degree program for Fullstack Web Development. I did not give up or give in. Things were hard along the way, I quit smoking nicotine also and that was the hardest thing to quit. I think the point of this introduction is to highlight my strength of will and determination. While also pointing out that I am human. I have faults but my main goal is to overcome them as well as provide a stable way of life for my children.
        </HeroDesc>
        <HeroList>
          <HeroItem></HeroItem>
        </HeroList>
      </HeroBox>
    </HeroContainer>
  );
};

export default HeroSection;
