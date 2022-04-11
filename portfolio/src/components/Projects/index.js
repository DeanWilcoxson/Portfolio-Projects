import React from "react";
import Project from "./Project";
import { ProjectContainer } from "./ProjectAesthetics";
import {
  projOne,
  projTwo,
  projThree,
  projFour,
  projFive,
  projSix,
  projSeven,
  projEight,
} from "./ProjectData";
const ProjectSection = () => {
  console.log(projOne);
  return (
    <>
      <ProjectContainer key={projOne.id}>
        <Project data={projOne} />
      </ProjectContainer>
      <ProjectContainer key={projTwo.id}>
        <Project data={projTwo} />
      </ProjectContainer>
      <ProjectContainer key={projThree.id}>
        <Project data={projThree} />
      </ProjectContainer>
      <ProjectContainer key={projFour.id}>
        <Project data={projFour} />
      </ProjectContainer>
      <ProjectContainer key={projFive.id}>
        <Project data={projFive} />
      </ProjectContainer>
      <ProjectContainer key={projSix.id}>
        <Project data={projSix} />
      </ProjectContainer>
      <ProjectContainer key={projSeven.id}>
        <Project data={projSeven} />
      </ProjectContainer>
      <ProjectContainer key={projEight.id}>
        <Project data={projEight} />
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
