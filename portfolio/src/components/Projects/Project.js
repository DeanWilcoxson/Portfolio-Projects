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
      <ProjectListBox>
        <ProjectList>
          <ProjectListDesc>Languages:</ProjectListDesc>
          {props.data.languages.map((language) => {
            return (
              <ProjectItem key={props.data.languages.indexOf(language)}>
                {language}
              </ProjectItem>
            );
          })}
        </ProjectList>
        <ProjectList>
          <ProjectListDesc>Concepts:</ProjectListDesc>
          {props.data.concepts.map((concept) => {
            return <ProjectItem>{concept}</ProjectItem>;
          })}
        </ProjectList>
      </ProjectListBox>
    </ProjectBox>
  );
};

export default Project;
