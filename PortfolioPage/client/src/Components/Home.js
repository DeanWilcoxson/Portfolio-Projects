import React from "react";
import profilePicture from ".././Images/dean.jpg";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="imgDiv">
          <img
            src={profilePicture}
            alt="Dean Wilcoxson"
            height="200"
            width="350"
            id="homeImg"
          ></img>
        </div>

        <h1 className="header">Dean Wilcoxson</h1>
        <div className="skillsBox">
          <ul>
            <b className="skills">Skills:</b>
            <li className="skill">CSS3</li>
            <li className="skill">Javascript</li>
            <li className="skill">Object-Oriented Programming</li>
            <li className="skill">Dom Manipulation</li>
            <li className="skill">React.Js</li>
            <li className="skill">
              State Management(Local State, Context, Redux)
            </li>
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
}
export default Home;
