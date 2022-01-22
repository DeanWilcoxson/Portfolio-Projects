import React, { Component } from "react";
import { FlexContainer } from "../Styled_Components/FlexContainer";
import { StyledFooter } from "./../Styled_Components/StyledFooter";

class Footer extends Component {
  render() {
    return (
      <FlexContainer>
        <StyledFooter> &copy; Dean Wilcoxson 2022 </StyledFooter>
      </FlexContainer>
    );
  }
}
export default Footer;
