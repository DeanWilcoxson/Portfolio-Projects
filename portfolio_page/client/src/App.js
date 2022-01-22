import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/header";
import Navbar from "./components/Layout/navbar";
import Footer from "./components/Layout/footer";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Projects from "./components/Pages/Projects/projects";
import Contact from "./components/Pages/contact";
import Error from "./components/Pages/error";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          <Route exact path="/about" element={<About />} />{" "}
          <Route exact path="/contact" element={<Contact />} />{" "}
          <Route exact path="/projects" element={<Projects />} />{" "}
          <Route exact path="*" element={<Error />} />{" "}
        </Routes>{" "}
        <Footer />
      </div>
    );
  }
}
export default App;
