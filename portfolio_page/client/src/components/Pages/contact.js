import React, { Component } from "react";
import { FlexContainer } from "./../Styled_Components/FlexContainer";
class Contact extends Component {
  render() {
    return (
      <FlexContainer>
        Contact Page
        <ul>
          <li>
            Phone: <b>1(209)-840-0950</b>
          </li>
          <li>
            Email: <b></b>
          </li>
          <li>
            Github: <b></b>
          </li>
          <li>
            LinkedIn: <b></b>
          </li>
          <li></li>
        </ul>
      </FlexContainer>
    );
  }
}
export default Contact;
