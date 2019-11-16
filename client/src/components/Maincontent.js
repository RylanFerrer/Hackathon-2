import React, { Component } from "react";
import axios from "axios";
// import Formpage from "./Formpage";
import handleSubmit from "./handleSubmit";
import Fightpage from "./Fightpage";

export default class MainContent extends React.Component {
  // state = {
  //   celeb1: "jim",
  //   img1: "url",
  //   celebStats1: [1, 2, 3, 4],
  //   health1: 0,
  //   celeb2: "hva",
  //   img2: "url2",
  //   celebStats2: [4, 3, 2, 1],
  //   health2: 0
  // };
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

  componentDidUpdate() {
    console.log("Component did update");
    console.log(this.state);
  }

  render() {
    if (this.state === null) {
      return (
        <>
          {/* <Formpage /> */}
          <form onSubmit={event => this.handleSubmit(event)}>
            <div>
              <p>Celeb 1</p>
              <input
                className="form-input__one"
                type="url"
                name="celebOne"
                placeholder="Type in the URL"
              />
            </div>

            <div>
              <p>Celeb 2</p>
              <input
                className="form-input__two"
                type="url"
                name="celebTwo"
                placeholder="Type in the URL"
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
