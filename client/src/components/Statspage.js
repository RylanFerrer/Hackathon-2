import React, { Component } from "react";
import Fightpage from "./Fightpage";

class Statspage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img></img>
          <div className="celeb-name__one"></div>
          <div className="stat1"></div>
          <div className="stat2"></div>
          <div className="stat3"></div>
          <div className="stat4"></div>
        </div>
        <div>
          <img></img>
          <div className="celeb-name__two"></div>
          <div className="stat1"></div>
          <div className="stat2"></div>
          <div className="stat3"></div>
          <div className="stat4"></div>
        </div>
        <Fightpage />
      </div>
    );
  }
}

export default Statspage;
