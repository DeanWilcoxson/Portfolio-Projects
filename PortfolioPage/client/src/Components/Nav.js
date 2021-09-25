import React from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Projects">Projects</Link>
      </div>
    );
  }
}
export default Nav;
