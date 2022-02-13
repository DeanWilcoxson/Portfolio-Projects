import React from "react";
import {
  Nav,
  NavLogo,
  NavContainer,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink, BarsIcon
} from "./NavbarElements";
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">munny</NavLogo>
          <MobileIcon onClick={toggle}>
            <BarsIcon />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
