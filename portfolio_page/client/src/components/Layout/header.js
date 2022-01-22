import React, { Component } from "react";
import { FlexContainer } from "../Styled_Components/FlexContainer";
import { StyledHeader } from "./../Styled_Components/StyledHeader";
class Header extends Component {
  render() {
    return (
      <FlexContainer>
        <StyledHeader>Dean Wilcoxson</StyledHeader>
        <img src={"../../images/Dean.jpg"} alt="" />
        <h3>| Junior Web Developer |</h3>
      </FlexContainer>
    );
  }
}
export default Header;
