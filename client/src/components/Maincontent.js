import React, { Component } from "react";
import axios from "axios";
// import Formpage from "./Formpage";
import handleSubmit from "./handleSubmit";
import Fightpage from "./Fightpage";

export default class MainContent extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    axios
      .get("/celeb", {
        params: {
          celebOne: event.target.celebOne.value
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          celeb2: response.data.name,
          celebStats2: response.data.celebstats1,
          img2: response.data.image
        });
      });
    axios
      .get("/celeb", {
        params: {
          celebOne: event.target.celebTwo.value
        }
      })
      .then(response => {
        console.log(response.data.name);
        console.log(response.data.image);
        console.log(response.data.celebstats1);
        console.log(response.data.health1);
        this.setState({
          celeb1: response.data.name,
          celebStats1: response.data.celebstats1,
          img1: response.data.image
        });
      });
  };

  render() {
    if (this.state === null) {
      return (
        <>
          <p className="instructions">
            Welcome to Celebrity WWE!!! To play this game, you must first google
            a celebrity, find an image of them, and "copy image address". You
            will place that image address into the input fields and click submit
            when you are done.
          </p>
          <form onSubmit={event => this.handleSubmit(event)}>
            {/* <section className="form"> */}
            <div className="form-celeb">
              <h4 className="form-celeb__title">Celeb 1</h4>
              <input
                className="form-celeb__input"
                type="url"
                name="celebOne"
                placeholder="Image URL"
              />
            </div>

            <div className="form-celeb">
              <h4 className="form-celeb__title">Celeb 2</h4>
              <input
                className="form-celeb__input"
                type="url"
                name="celebTwo"
                placeholder="Image URL"
              />
            </div>

            <button className="form-button" type="submit" value="reset form">
              SUBMIT
            </button>
          </form>
        </>
      );
    } else return <Fightpage stats={this.state} />;
  }
}
