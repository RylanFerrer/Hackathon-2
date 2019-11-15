import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Formpage from "./components/Formpage";
import Header from "./components/Header";
import Statspage from "./components/Statspage";
import MainContent from "./components/Maincontent";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainContent />
      </>
    );
  }
}

export default App;
