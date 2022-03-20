import React from "react";
import {
  HeaderContainer,
  HeaderBox,
  HeaderText,
  LinkedInIcon,
  GithubIcon,
  SocialLink,
  SocialBox,
  SocialDescription
} from "./HeaderAesthetics";

const HeaderSection = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <HeaderText>Dean Wilcoxson</HeaderText>
        <SocialBox>
          <SocialDescription>Connect with me:</SocialDescription>
          <SocialLink href="https://www.linkedin.com/in/dean-wilcoxson-900680201/">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href="https://github.com/DeanWilcoxson">
            <GithubIcon />
          </SocialLink>
        </SocialBox>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default HeaderSection;
