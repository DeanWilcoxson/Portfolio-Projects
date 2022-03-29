import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { GoRepo } from "react-icons/go";
export const ProjectContainer = styled.div`
  margin: 2rem;
  padding: 0 5rem;
  width: 80%;
  box-shadow: grey 8px 8px 16px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 60%;
    text-align: center;
  }
  @media screen and (max-width: 370px) {
    width: 40%;
  }
`;
export const ProjectTitle = styled.h1``;
export const ProjectBox = styled.div``;
export const ProjectList = styled.ul``;
export const ProjectListDesc = styled.h4``;
export const ProjectItem = styled.li``;
export const ProjectImage = styled.img``;
export const ProjectLink = styled.a``;
export const ProjectLinkDesc = styled.p`
  color: grey;
  text-shadow: 1.5px 1px 2px lightgrey;
`;
export const CodeIcon = styled(GoRepo)`
  color: #e34c26;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
export const GithubIcon = styled(FaGithub)`
  color: #171515;
  font-size: 2rem;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;
