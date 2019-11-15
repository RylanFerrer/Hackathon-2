import React, { Component } from "react";
import Formpage from "./Formpage";
import Fightpage from "./Fightpage";

export default class MainContent extends React.Component {
  state = {
    celeb1: "jim",
    img1: "url",
    celebStats1: [1, 2, 3, 4],
    health1: 0,
    celeb2: "hva",
    img2: "url2",
    celebStats2: [21, 22, 23, 24],
    health2: 0
  };

  render() {
    if (Object.keys(this.state.celeb1).length === 0) {
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
