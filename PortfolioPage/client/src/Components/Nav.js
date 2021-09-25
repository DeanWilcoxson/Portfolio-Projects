import React from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <button className="navBtn">
          <Link to="/">Home</Link>
        </button>
        <button className="navBtn">
          <Link to="/About">About</Link>
        </button>
        <button className="navBtn">
          <Link to="/Services">Services</Link>
        </button>
        <button className="navBtn">
          <Link to="/Projects">Projects</Link>
        </button>
      </div>
    );
  }
}
export default Nav;
