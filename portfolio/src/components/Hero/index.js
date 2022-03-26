import React from "react";
import {
  HeroContainer,
  HeroBox,
  HeroTitle,
  HeroDesc,
  HeroList,
  HtmlIcon,
  CssIcon,
  IconBox,
  JsIcon,
  PyIcon,
  MySqlIcon,
  ReactIcon,
  IconLabel,
  IconLink,
  HeroListDesc,
  // StyledCompIcon,
} from "./HeroAesthetics";
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBox>
        <HeroTitle>About Me:</HeroTitle>
        <HeroDesc>
          Three years ago, I was diagnosed with Congestive heart failure due to
          my prior intravenuos drug use. I am now recovering, three years sober,
          and have graduated an Associates degree program for Fullstack Web
          Development. I did not give up or give in. Things were hard along the
          way. The point of this introduction is to highlight my strength of
          will and determination, while also pointing out that I am human I have
          flaws. My main goal in life is to overcome those flaws and continually
          grow, as well as provide a stable way of life for my children.
        </HeroDesc>
        <HeroListDesc>Languages:</HeroListDesc>
        <HeroList>
          <IconBox>
            <IconLink href="https://www.w3schools.com/html/">
              <HtmlIcon />
            </IconLink>
            <IconLabel>HTML5</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://www.w3schools.com/css/">
              <CssIcon />
            </IconLink>
            <IconLabel>CSS3</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://www.w3schools.com/js/default.asp">
              <JsIcon />
            </IconLink>
            <IconLabel>Javascript</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://reactjs.org/docs/getting-started.html">
              <ReactIcon />
            </IconLink>
            <IconLabel>React.JS</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://www.python.org/doc/">
              <PyIcon />
            </IconLink>
            <IconLabel>Python</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://dev.mysql.com/doc/">
              <MySqlIcon />
            </IconLink>
            <IconLabel>MySQL</IconLabel>
          </IconBox>
          </HeroList>
          </HeroBox>
          </HeroContainer>
          );
        };

export default HeroSection;

        // <IconBox>
        //   <IconLink href="https://styled-components.com/docs">
        //     <StyledCompIcon />
        //   </IconLink>
        //   <IconLabel>Styled Components</IconLabel>
        // </IconBox>