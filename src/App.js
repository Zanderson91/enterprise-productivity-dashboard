import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/sidebar";
import "./app.css";
import Homepage from "./Pages/Home/homepage";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <div className="container">
          <Sidebar />
          <Homepage />
        </div>
      </div>
    </Router>
  );
}

export default App;
