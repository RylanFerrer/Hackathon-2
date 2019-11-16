import React, { Component } from "react";

class Statspage extends React.Component {
  render() {
    if (this.props.stats.celebStats1 && this.props.stats.celebStats2) {
      return (
        <div>
          <div>
            <img alt="" src={`${this.props.stats.img1}`} />
            <div className="celeb-name__one">{`${this.props.stats.celeb1}`}</div>
            {/* <div className="stat1">{`${this.props.stats.img1}`}</div> */}
            <div className="stat2">{`${this.props.stats.celebStats1[0]}`}</div>
            <div className="stat3">{`${this.props.stats.celebStats1[1]}`}</div>
            <div className="stat4">{`${this.props.stats.celebStats1[2]}`}</div>
            <div className="stat5">{`${this.props.stats.celebStats1[3]}`}</div>
          </div>

          <div>
            <img alt="" src={`${this.props.stats.img2}`} />
            <div className="celeb-name__one">{`${this.props.stats.celeb2}`}</div>
            {/* <div className="stat1">{`${this.props.stats.img2}`}</div> */}
            <div className="stat2">{`${this.props.stats.celebStats2[0]}`}</div>
            <div className="stat3">{`${this.props.stats.celebStats2[1]}`}</div>
            <div className="stat4">{`${this.props.stats.celebStats2[2]}`}</div>
            <div className="stat5">{`${this.props.stats.celebStats2[3]}`}</div>
          </div>
        </div>
      );
    } else return <h1>Waiting for Duel</h1>;
  }
}

export default Statspage;
