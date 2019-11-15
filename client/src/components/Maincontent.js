import React, { Component } from "react";
import axios from "axios";
import Formpage from "./Formpage";
import Statspage from "./Statspage";
import Fightpage from "./Fightpage";

export default class MainContent extends React.Component {
  state = {
    formpageinfo: "",
    statspageinfo: ""
  };

  render() {
    if (Object.keys(this.state.formpageinfo).length === 0) {
      return (
        <>
          <Formpage />
        </>
      );
    } else {
      return <Fightpage stats={this.state} />;
    }
  }
}
