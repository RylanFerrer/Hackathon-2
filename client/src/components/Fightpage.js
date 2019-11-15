import React, { Component } from "react";
import StatsPage from "./Statspage";
import FightEvent from "./FightEvent";

class Fightpage extends React.Component {
  //this.props is how you access props
  render() {
    return (
      <section>
        <StatsPage stats={this.props.stats} />
        <FightEvent
          health1={this.props.stats.health1}
          health2={this.props.stats.health2}
        />
      </section>
    );
  }
}

export default Fightpage;
