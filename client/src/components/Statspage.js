import React, { Component } from "react";

class Statspage extends React.Component {
  render() {
    if (this.props.stats.celebStats1 && this.props.stats.celebStats2) {
      return (
        <>
          <h1 className="fight-headline">The Dream Fight</h1>
          <section className="celeb">
            <div className="celeb-stats">
              <div className="celeb-stats__image-container">
                <img
                  className="celeb-stats__image-container--content"
                  alt=""
                  src={`${this.props.stats.img1}`}
                />
              </div>
              <div className="celeb-stats__name">{`Celebrity Fighter #1: ${this.props.stats.celeb1.toUpperCase()}`}</div>
              <div className="celeb-stats__stat">{`Attack: ${this.props.stats.celebStats1[0]}`}</div>
              <div className="celeb-stats__stat">{`Defense: ${this.props.stats.celebStats1[1]}`}</div>
              <div className="celeb-stats__stat">{`Speed: ${this.props.stats.celebStats1[2]}`}</div>
              <div className="celeb-stats__stat">{`Special: ${this.props.stats.celebStats1[3]}`}</div>
            </div>

            <div className="celeb-stats">
              <div className="celeb-stats__image-container">
                <img
                  className="celeb-stats__image-container--content"
                  alt=""
                  src={`${this.props.stats.img2}`}
                />
              </div>
              <div className="celeb-stats__name">{`Celebrity Fighter #2: ${this.props.stats.celeb2.toUpperCase()}`}</div>
              <div className="celeb-stats__stat">{`Attack: ${this.props.stats.celebStats2[0]}`}</div>
              <div className="celeb-stats__stat">{`Defense: ${this.props.stats.celebStats2[1]}`}</div>
              <div className="celeb-stats__stat">{`Speed: ${this.props.stats.celebStats2[2]}`}</div>
              <div className="celeb-stats__stat">{`Special: ${this.props.stats.celebStats2[3]}`}</div>
            </div>
          </section>
        </>
      );
    } else return <h1>Waiting for Fighters</h1>;
  }
}

export default Statspage;
