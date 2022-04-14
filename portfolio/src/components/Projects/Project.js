import React from "react";
import {
  ProjectTopLine,
  ProjectTitle,
  ProjectBox,
  ProjectImage,
  ProjectList,
  ProjectItem,
  ProjectLink,
  GithubIcon,
  ProjectListDesc,
  ProjectListBox,
  ProjectListContainer,
} from "./ProjectAesthetics";
const Project = (props) => {
  console.log(props);
  return (
    <ProjectBox>
      <ProjectTopLine>
        <ProjectTitle>{props.data.name}</ProjectTitle>
        <ProjectLink href={props.data.link}>
          <GithubIcon />
        </ProjectLink>
      </ProjectTopLine>
      <ProjectImage src={props.data.image} alt="pic" width="90%" height="50%" />
      <ProjectListContainer>
        <ProjectListBox>
          <ProjectListDesc>Languages:</ProjectListDesc>
          <ProjectList>
            {props.data.languages.map((language) => {
              return (
                <ProjectItem key={props.data.languages.indexOf(language) + 1}>
                  {language}
                </ProjectItem>
              );
            })}
          </ProjectList>
        </ProjectListBox>
        <ProjectListBox>
          <ProjectListDesc>Concepts:</ProjectListDesc>
          <ProjectList>
            {props.data.concepts.map((concept) => {
              return (
                <ProjectItem key={props.data.concepts.indexOf(concept) + 1}>
                  {concept}
                </ProjectItem>
              );
            })}
          </ProjectList>
        </ProjectListBox>
      </ProjectListContainer>
    </ProjectBox>
  );
};

export default Project;
