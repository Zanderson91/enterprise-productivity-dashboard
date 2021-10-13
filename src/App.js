
import './App.css';
import _nav from './_nav';
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CIcon from "@coreui/icons-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <_nav />
      </header>
    </div>
  );
}

export default App;
