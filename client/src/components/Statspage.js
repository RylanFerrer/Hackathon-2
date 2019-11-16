import React, { Component } from "react";

class Statspage extends React.Component {
  render() {
    if (this.props.stats.celebStats1 && this.props.stats.celebStats2) {
      return (
        <div>
          <div>
            <img alt="" src={`${this.props.stats.img1}`} />
            <div className="celeb-name__one">{`Celebrity Fighter #1: ${this.props.stats.celeb1.toUpperCase()}`}</div>
            <div className="stat2">{`Attack: ${this.props.stats.celebStats1[0]}`}</div>
            <div className="stat3">{`Defense: ${this.props.stats.celebStats1[1]}`}</div>
            <div className="stat4">{`Speed: ${this.props.stats.celebStats1[2]}`}</div>
            <div className="stat5">{`Special: ${this.props.stats.celebStats1[3]}`}</div>
          </div>

          <div>
            <img alt="" src={`${this.props.stats.img2}`} />
            <div className="celeb-name__one">{`Celebrity Fighter #2: ${this.props.stats.celeb2.toUpperCase()}`}</div>
            <div className="stat2">{`Attack: ${this.props.stats.celebStats2[0]}`}</div>
            <div className="stat3">{`Defense: ${this.props.stats.celebStats2[1]}`}</div>
            <div className="stat4">{`Speed: ${this.props.stats.celebStats2[2]}`}</div>
            <div className="stat5">{`Special: ${this.props.stats.celebStats2[3]}`}</div>
          </div>
        </div>
      );
    } else return <h1>Waiting for Fighters</h1>;
  }
}

export default Statspage;
