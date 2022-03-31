import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
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
export const ProjectTitle = styled.h1`
  text-shadow: 1.5px 1px 2px grey;
  color: #0d0d0d;
`;
export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProjectList = styled.ul`
  display: flex;
  flex-direction: row;
`;
export const ProjectListBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const ProjectListDesc = styled.h4`
  text-shadow: 0.75px 1px 1.5px grey;
`;
export const ProjectItem = styled.li`
  font-weight: bold;
  color: grey;
  margin: 0 1rem;
  padding: 1.4rem 0;
  text-shadow: 1.5px 1px 2px lightgrey;
  list-style-type: none;
  /* box-shadow: grey 3px 3px 6px; */
  /* border-radius: 5px; */
`;
export const ProjectImage = styled.img`
  align-self: center;
`;
export const ProjectLink = styled.a``;
export const GithubIcon = styled(FaGithub)`
  color: #171515;
  font-size: 2rem;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;
