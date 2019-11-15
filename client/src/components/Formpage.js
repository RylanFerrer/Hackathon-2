import React, { Component } from "react";

class Formpage extends React.Component {
  render() {
    return (
      <form>
        <div>
          <p>Celeb 1</p>
          <input
            className="form-input__one"
            type="url"
            name="name"
            placeholder="Type in the URL"
          />
        </div>

        <div>
          <p>Celeb 2</p>
          <input
            className="form-input__two"
            type="url"
            name="name"
            placeholder="Type in the URL"
          />
        </div>

        <button className="form-button" type="submit" value="reset form">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default Formpage;
