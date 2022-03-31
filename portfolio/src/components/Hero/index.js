import React from "react";
import CredlyImage1 from "../../images/CredlyImage1.JPG";
import CredlyImage2 from "../../images/CredlyImage2.JPG";
import CredlyImage3 from "../../images/CredlyImage3.JPG";
import CredlyImage4 from "../../images/CredlyImage4.JPG";
import CredlyImage5 from "../../images/CredlyImage5.JPG";
import CredlyImage6 from "../../images/CredlyImage6.JPG";
import CredlyImage7 from "../../images/CredlyImage7.JPG";
import CredlyImage8 from "../../images/CredlyImage8.JPG";
import CredlyImage9 from "../../images/CredlyImage9.JPG";
import CredlyImage10 from "../../images/CredlyImage10.JPG";
import CredlyImage11 from "../../images/CredlyImage11.JPG";
import CredlyImage12 from "../../images/CredlyImage12.JPG";

import {
  HeroContainer,
  HeroBox,
  HeroTitle,
  HeroDesc,
  HeroList,
  BadgeList,
  HeroItem,
  BadgeItem,
  HtmlIcon,
  HeroImage,
  CssIcon,
  IconBox,
  JsIcon,
  PyIcon,
  MySqlIcon,
  ReactIcon,
  IconLabel,
  IconLink,
  HeroListDesc,
  NodeIcon,
  MochaIcon,
  ChaiIcon,
  ExpressIcon,
  MongoIcon,
} from "./HeroAesthetics";
const HeroSection = () => {
  const years = "Three";
  const age = "thirty";
  return (
    <HeroContainer>
      <HeroBox>
        <HeroTitle>About</HeroTitle>
        <HeroDesc>
          I am from a small town called Oakdale, in California. I am {age + " "}{" "}
          years old.
          {" " + years + " "}
          years ago I was diagnosed with Congestive Heart Failure due to my
          prior drug use, I am now in recovery, three years sober. I have
          graduated an Associates degree program for Fullstack Web Development,
          focusing on the M.E.R.N and L.A.M.P Stacks. Things definitely were
          hard along the way but I did not give up. My main goal in life is to
          overcome adversity and continually grow, as well as provide a stable
          way of life for my children. I believe these qualities, as well as
          others, will make me a valuable member of your team.
        </HeroDesc>
        <hr width="100%" />
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
            <IconLink href="https://nodejs.org/en/docs/">
              <NodeIcon />
            </IconLink>
            <IconLabel>Node.JS</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://mochajs.org/">
              <MochaIcon />
            </IconLink>
            <IconLabel>Mocha.JS</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://www.chaijs.com/">
              <ChaiIcon />
            </IconLink>
            <IconLabel>Chai.JS</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://expressjs.com/">
              <ExpressIcon />
            </IconLink>
            <IconLabel>Express.JS</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://www.mongodb.com/">
              <MongoIcon />
            </IconLink>
            <IconLabel>MongoDB</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://dev.mysql.com/doc/">
              <MySqlIcon />
            </IconLink>
            <IconLabel>MySQL</IconLabel>
          </IconBox>
          <IconBox>
            <IconLink href="https://www.python.org/doc/">
              <PyIcon />
            </IconLink>
            <IconLabel>Python</IconLabel>
          </IconBox>
        </HeroList>
        <hr width="100%" />
        <HeroListDesc>Concepts:</HeroListDesc>
        <HeroList>
          <HeroItem href="https://www.w3schools.com/html/html5_semantic_elements.asp">
            Semantic HTML
          </HeroItem>
          <HeroItem href="https://styled-components.com/docs">
            Styled Components
          </HeroItem>
          <HeroItem href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming">
            OOP
          </HeroItem>
          <HeroItem href="https://en.wikipedia.org/wiki/Test-driven_development">
            TDD
          </HeroItem>
          <HeroItem href="https://reactjs.org/docs/state-and-lifecycle.html">
            State Management
          </HeroItem>
          <HeroItem href="https://expressjs.com/en/guide/using-middleware.html">
            Middleware
          </HeroItem>
          <HeroItem href="https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)">
            Encapsulation
          </HeroItem>
          <HeroItem href="https://realpython.com/python-data-structures/">
            Data Structures
          </HeroItem>
          <HeroItem href="https://restfulapi.net/">RESTful API</HeroItem>
        </HeroList>
        <hr width="100%" />
        <HeroListDesc>Badges:</HeroListDesc>
        <HeroDesc>Issued by Bryan University</HeroDesc>
        <BadgeList>
          <BadgeItem href="https://www.credly.com/earner/earned/badge/e841c5c0-3f5f-4949-a05c-d38e35221be7">
            <HeroImage src={CredlyImage12} alt="badge" />
          </BadgeItem>

          <HeroImage src={CredlyImage4} alt="badge" />
          <HeroImage src={CredlyImage5} alt="badge" />
          <HeroImage src={CredlyImage11} alt="badge" />
          <HeroImage src={CredlyImage1} alt="badge" />
          <HeroImage src={CredlyImage9} alt="badge" />
          <HeroImage src={CredlyImage10} alt="badge" />
          <HeroImage src={CredlyImage7} alt="badge" />
          <HeroImage src={CredlyImage2} alt="badge" />
          <HeroImage src={CredlyImage3} alt="badge" />
          <HeroImage src={CredlyImage8} alt="badge" />
          <HeroImage src={CredlyImage6} alt="badge" />
        </BadgeList>
      </HeroBox>
    </HeroContainer>
  );
};

export default HeroSection;
