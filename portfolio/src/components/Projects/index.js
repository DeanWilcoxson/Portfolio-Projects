import React from "react";
import {
  ProjectContainer,
  ProjectTitle,
  ProjectBox,
  ProjectImage,
  ProjectList,
  ProjectItem,
  ProjectLink,
  CodeIcon,
} from "./ProjectAesthetics";
const ProjectSection = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Project 1</ProjectTitle>
      <ProjectBox>
        <ProjectImage src="" alt="" />
        <ProjectList>
          <ProjectItem></ProjectItem>
        </ProjectList>
        <ProjectLink>
          <CodeIcon />
        </ProjectLink>
      </ProjectBox>
    </ProjectContainer>
  );
};

export default ProjectSection;
