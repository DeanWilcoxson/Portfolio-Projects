import React from "react";
import Project from "./Project";
import { ProjectContainer } from "./ProjectAesthetics";
import { projOne, projTwo, projThree, projFour } from "./ProjectData";
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
    </>
  );
};

export default ProjectSection;
