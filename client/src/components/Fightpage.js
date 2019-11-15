import React, { Component } from "react";
import StatsPage from "./Statspage";
import FightEvent from "./FightEvent";

class Fightpage extends React.Component {
  //this.props is how you access props
  render() {
    return (
      <section>
        <StatsPage stats={this.props.stats} />
        <FightEvent health={this.props.health} />
      </section>
    );
  }
}

export default Fightpage;
