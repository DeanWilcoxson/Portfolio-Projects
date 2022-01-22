import React, { Component } from "react";
import { StyledNavbar } from "../Styled_Components/StyledNavbar";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Link to="/"> Home </Link> <Link to="/about"> About </Link>{" "}
        <Link to="/projects"> Projects </Link>{" "}
        <Link to="/contact"> Contact </Link>{" "}
      </StyledNavbar>
    );
  }
}
export default Navbar;
