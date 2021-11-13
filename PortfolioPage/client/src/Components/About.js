import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="aboutDiv">
        <h4 className="aboutHeader">A lttle about me:</h4>
        <div className="item">
          <div class="transition">Hello World!</div>
          <p style={{ textAlign: "left" }}>
            My name is Dean Wilcoxson, I am student at Bryan University. I have
            learned the full M.E.R.N stack over a ten month period. I have
            graduated and recieved my certificate. I am now currently learning
            the full L.A.M.P stack. I'm a proud father of two beautiful girls. I
            was born and raised in California.
          </p>
        </div>
      </div>
    );
  }
}
export default About;
