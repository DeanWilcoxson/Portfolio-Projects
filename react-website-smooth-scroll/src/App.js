import React from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
