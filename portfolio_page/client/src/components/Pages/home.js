import React, { Component } from "react";
import { FlexContainer } from "./../Styled_Components/FlexContainer";
class Home extends Component {
  render() {
    return (
      <FlexContainer>
        <b> Home Page </b>
        <ul>
          Skills:
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JS</li>
          <li>Express.JS</li>
          <li>React.JS</li>
          <li>Python</li>
          <li>TDD</li>
          <li>OOP</li>
          <li>State Managment</li>
          <li>RESTful API Design</li>
        </ul>
      </FlexContainer>
    );
  }
}
export default Home;
