import React from "react";
import {
  HeaderContainer,
  HeaderBox,
  HeaderText,
  LinkedInIcon,
  GithubIcon,
} from "./HeaderAesthetics";

const HeaderSection = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <HeaderText>Dean Wilcoxson</HeaderText>
        <br />
        <LinkedInIcon />
        <GithubIcon />
      </HeaderBox>
    </HeaderContainer>
  );
};

export default HeaderSection;
