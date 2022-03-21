import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const HeaderContainer = styled.div`
  width: 86.5%;
  position: fixed;
  padding: 0 5rem;
  margin: 2rem;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
  box-shadow: grey 8px 8px 16px;
`;
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    position: fixed;
    margin: 0;
  }
  @media screen and (max-width: 499px) {
    position: fixed;
    margin: 0;
  }
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
  &:hover {
    color: green;
    cursor: pointer;
  }
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
