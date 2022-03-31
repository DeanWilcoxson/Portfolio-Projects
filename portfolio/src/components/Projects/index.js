import React from "react";
import FridgeBuddyPreview from "../../images/FridgeBuddyPreview.JPG";
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
  ProjectListBox,
} from "./ProjectAesthetics";
const ProjectSection = () => {
  return (
    <ProjectContainer>
      <ProjectBox>
        <ProjectTitle>Fridge Buddy</ProjectTitle>
        <ProjectImage
          src={FridgeBuddyPreview}
          alt="pic"
          width="90%"
          height="50%"
        />
        <ProjectListBox>
          <ProjectList>
            <ProjectListDesc>Languages:</ProjectListDesc>
            <ProjectItem>HTML5</ProjectItem>
            <ProjectItem>React.JS</ProjectItem>
            <ProjectItem>Express.JS</ProjectItem>
            <ProjectItem>MongoDB</ProjectItem>
          </ProjectList>
          <ProjectLink href="https://github.com/DeanWilcoxson/AFS-220/tree/main/FridgeBuddy">
            <GithubIcon />
          </ProjectLink>
          <ProjectList>
            <ProjectListDesc>Concepts-in-use:</ProjectListDesc>
            <ProjectItem>API Database</ProjectItem>
            <ProjectItem>Styled Components</ProjectItem>
          </ProjectList>
        </ProjectListBox>

      </ProjectBox>
    </ProjectContainer>
  );
};

export default ProjectSection;
