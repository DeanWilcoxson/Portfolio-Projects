import React from "react";
import {
  ProjectContainer,
  ProjectTitle,
  ProjectBox,
  ProjectImage,
  ProjectList,
  ProjectItem,
  ProjectLink,
  GithubIcon,
  ProjectListDesc,
  ProjectLinkDesc,
} from "./ProjectAesthetics";
const ProjectSection = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Project 1</ProjectTitle>
      <ProjectBox>
        <ProjectImage src="" alt="" />
        <ProjectList>
          <ProjectListDesc>Languages Used</ProjectListDesc>
          <ProjectItem></ProjectItem>
        </ProjectList>
        <ProjectLink>
          <GithubIcon />
        </ProjectLink>
        <ProjectLinkDesc>View Code</ProjectLinkDesc>
      </ProjectBox>
    </ProjectContainer>
  );
};

export default ProjectSection;
