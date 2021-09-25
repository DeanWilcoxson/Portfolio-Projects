import React from "react";

class Home extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     initState = [];
  //   }
  // <img src="./Images/dean.jpg" alt="" height="500" weight="500"></img>
  render() {
    return (
      <div>
        <h1 className="header">Dean Wilcoxson</h1>
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
}
export default Home;
