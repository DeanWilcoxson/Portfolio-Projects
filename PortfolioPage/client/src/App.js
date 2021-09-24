import React from "react";
// import {faHtml5} from "@fortawesome/free-brands-svg-icons"
import "./styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHtml5 } from 'font-awesome';
function App() {
  // const html5 = <FontAwesomeIcon icon={faHtml5} color="blue" />;
            // <li className="skill">{html5}</li>

  return (
    <div className="App">
    <h1 className="header">Dean Wilcoxson</h1>
    <img src="./Images/dean.jpg" alt="" height="500" weight="500"></img>
      <ul className="aboutDiv">
        <b className="aboutHeader">A lttle about me:</b>{" "}
        <li className="item">
          I am student at Bryan University, where I have learned the full
          M.E.R.N stack over a ten month period and have graduated and recieved
          my certificate. I am now currently learning the full L.A.M.P stack.
        </li>
        <li className="item">I'm a proud father of two beautiful girls.</li>
        <li className="item">I was born and raised in California.</li>
      </ul>
      <div className="skillsBox">
        <ul>
          <b className="skills">Skills:</b>
          <li className="skill">CSS3</li>
          <li className="skill">Javascript</li>
          <li className="skill">Object-Oriented Programming</li>
          <li className="skill">Dom Manipulation</li>
          <li className="skill">React.Js</li>
          <li className="skill">State Management(Context, Redux)</li>
          <li className="skill">Express.Js</li>
          <li className="skill">Axios</li>
          <li className="skill">RESTful Api Design</li>
          <li className="skill">Mongoose</li>
          <li className="skill">Mysql</li>
          <li className="skill">Node.Js</li>
          <li className="skill">Docker</li>
          <li className="skill">Debugging</li>
          <li className="skill">Encryption/Authentication</li>
          <li className="skill">Exposure to Nginx/Apache</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
