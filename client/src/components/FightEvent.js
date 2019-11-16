import React, { Component } from "react";
import checkIndex from "./fightfunctions/fightOnClick";
// import checkIndex from "./fightfunctions/checkIndex";

export default class FightEvent extends Component {
  state = {
    fighter1Count: 0,
    fighter2Count: 0
  };

  componentDidUpdate() {
    console.log(this.state.fighter1Count);
    console.log(this.state.fighter2Count);
  }

  render() {
    let celeb1 = this.props.celebstats.celeb1;
    let celeb2 = this.props.celebstats.celeb2;
    // let health1 = this.props.celebstats.health1;
    // let health2 = this.props.celebstats.health2;
    let stats1 = this.props.celebstats.celebStats2;
    let stats2 = this.props.celebstats.celebStats1;

    const checkStats = (arr1, arr2) => {
      let index = checkIndex(arr1);
      let fighter1Count = this.state.fighter1Count; //Fighter1Health is the state of the
      let fighter2Count = this.state.fighter2Count;
      let fighter1 = arr1[index];
      let fighter2 = arr2[index];
      console.log(`Fighter 1 stat = ${fighter1}`);
      console.log(`Fighter 2 stat = ${fighter2}`);
      if (fighter1 > fighter2) {
        this.setState({
          fighter2Count: fighter2Count + 1
        });
        // console.log(`fighter 2 count is equal to ${this.state.fighter2Count}`);
      } else if (fighter1 < fighter2) {
        this.setState({
          fighter1Count: fighter1Count + 1
        });

        // console.log(`fighter 1 count is equal to ${this.state.fighter1Count}`);
      } else console.log("players are evenly matched");
    };

    const fightNow = () => {
      return checkStats(stats1, stats2);
    };
    return (
      <div>
        <h1>FIGHT TIME</h1>
        <div>{`${celeb1}`} Health</div>
        <div>{`${celeb2}`} Health</div>
        <button onClick={fightNow}>Click me</button>
      </div>
    );
  }
}
