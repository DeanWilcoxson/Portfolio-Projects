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
  @media screen and (max-width: 768px) {
    text-align: left;
  }
  @media screen and (max-width: 370px) {
  }
`;
export const ProjectLink = styled.a`
  margin: 0;
  padding: 0;
`;
export const GithubIcon = styled(FaGithub)`
  color: #171515;
  font-size: 2rem;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;
export const ProjectTopLine = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (max-width: 370px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const ProjectList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;
export const ProjectListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
  align-items: flex-start;
`;
export const ProjectListDesc = styled.h4`
  text-shadow: 0.75px 1px 1.5px grey;
`;
export const ProjectItem = styled.li`
  font-size: small;
  font-weight: bold;
  color: grey;
  margin: 0 1rem;
  padding: 1.4rem 0;
  text-shadow: 1.5px 1px 2px lightgrey;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    font-size: smaller;
  }
  @media screen and (max-width: 370px) {
    font-size: x-small;
  }
`;
export const ProjectImage = styled.img`
  align-self: center;
  border-radius: 5px;
`;
