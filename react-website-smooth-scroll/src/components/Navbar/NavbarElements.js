import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";
export const Nav = styled.nav`
  background-color: black;
  height: 80px;
  margin-top: -80px;
  display: Flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(RouterLink)`
  color: #02b802;
  justify-self: center;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-itmes: center;
  margin-top: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;
export const NavLinks = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #02b802;
  }
`;
export const BarsIcon = styled(FaBars)`
  color: #fff;
  font-size: 1.5rem;
  &:hover {
    color: #02b802;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position:absolute;
    top:20px;
    right:20px;
    transform: translate(-100%, 60%)
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;
    &:hover {
      color: #02b802;
  }
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(RouterLink)`
  border-radius: 50px;
  background-color: #02b802;
  white-space: nowrap;
  padding: 10px 20px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;