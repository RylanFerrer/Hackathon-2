import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Formpage />
        <Fightpage />
      </>
    );
  }
}

export default App;
