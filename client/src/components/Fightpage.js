import React, { Component } from "react";
import Statspage from "./Statspage";
// import FightEvent from "./FightEvent";

class Fightpage extends React.Component {
  //this.props is how you access props
  render() {
    return (
      <section>
        <Statspage stats={this.props.stats} />
        {/* <FightEvent
          health1={this.props.stats.health1}
          health2={this.props.stats.health2}
        /> */}
      </section>
    );
  }
}

export default Fightpage;
