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
          
            <div
              class="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="VERTICAL"
              data-vanity="dean-wilcoxson-900680201"
              data-version="v1"
            >
              <a
                class="badge-base__link LI-simple-link"
                href="https://www.linkedin.com/in/dean-wilcoxson-900680201?trk=profile-badge"
              >
              </a>
            </div>
        </ul>
      </FlexContainer>
    );
  }
}
export default Contact;
