import React, { Component } from "react";
import checkIndex from "./fightfunctions/fightOnClick";
import HealthBar from "./fightfunctions/HealthBar";

export default class FightEvent extends Component {
  state = {
    fighter1Count: 0,
    fighter2Count: 0
  };

  render() {
    let celeb1 = this.props.celebstats.celeb1;
    let celeb2 = this.props.celebstats.celeb2;
    let stats1 = this.props.celebstats.celebStats2;
    let stats2 = this.props.celebstats.celebStats1;

    const checkStats = (arr1, arr2) => {
      let index = checkIndex(arr1);
      let fighter1Count = this.state.fighter1Count;
      let fighter2Count = this.state.fighter2Count;
      let fighter1 = arr1[index];
      let fighter2 = arr2[index];
      if (fighter1 > fighter2) {
        this.setState({
          fighter2Count: fighter2Count + 1
        });
      } else if (fighter1 < fighter2) {
        this.setState({
          fighter1Count: fighter1Count + 1
        });
      } else console.log("players are evenly matched");
    };

    const fightNow = () => {
      return checkStats(stats1, stats2);
    };

    if (this.state.fighter1Count > 1) {
      return <h1>{`And the winner is ${this.props.celebstats.celeb2}`}</h1>;
    } else if (this.state.fighter2Count > 1) {
      return <h1>{`And the winner is ${this.props.celebstats.celeb1}`}</h1>;
    } else
      return (
        <div>
          <h1>FIGHT TIME</h1>
          <div>{`${celeb1}`} Health</div>
          <HealthBar healthStatus={this.state.fighter1Count} />
          <div>{`${celeb2}`} Health</div>
          <HealthBar healthStatus={this.state.fighter2Count} />
          <button onClick={fightNow}>Next Round</button>
        </div>
      );
  }
}
