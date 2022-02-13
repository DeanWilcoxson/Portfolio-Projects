import React, { Component } from "react";
import { FlexHeader } from "../Styled_Components/FlexHeader";
import { StyledHeader } from "./../Styled_Components/StyledHeader";
import image from "../../images/Dean3.jpg"
class Header extends Component {
  render() {
    return (
      <FlexHeader>
        <StyledHeader>Dean Wilcoxson</StyledHeader>
        <h3>| Passionate Web Developer |</h3>
        <img src={image} alt="dean" />
      </FlexHeader>
    );
  }
}
export default Header;
