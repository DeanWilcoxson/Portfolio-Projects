import styled from "styled-components";
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
export const ProjectItem = styled.li``;
export const ProjectImage = styled.img``;
export const ProjectLink = styled.a``;
export const CodeIcon = styled(GoRepo)``;
