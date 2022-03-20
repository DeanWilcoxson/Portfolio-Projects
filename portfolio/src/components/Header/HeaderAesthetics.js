import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const HeaderContainer = styled.div`
  width: 86.5%;
  position: fixed;
  padding: 0 5rem;
  margin: 2rem;
  border-left: 3px solid #0d0d0d;
  border-bottom: 1px solid #0d0d0d;
  box-shadow: grey 8px 8px 16px;
  @media screen and (max-width: 768px) {
    position: fixed;
    margin: 0;
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
export const HeaderText = styled.h1`
  text-align: center;
  color: #0d0d0d;
  text-shadow: 1.5px 1px 2px grey;
`;
export const SocialBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SocialDescription = styled.p`
  font-weight: bolder;
  text-shadow: 1.5px 1px 2px grey;
    color: #0d0d0d;

`;
export const SocialLink = styled.a`
  padding: 1rem;
`;
export const LinkedInIcon = styled(FaLinkedin)`
  color: #0077b5;
  font-size: 2rem;
  &:hover {
    color: green;
    cursor: pointer;
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
