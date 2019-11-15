import React, { Component } from "react";
import axios from 'axios';
class Formpage extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
      
        axios.get('/celeb', {
          params: {
            celebOne: event.target.celebOne.value,
          }
         
        }).then(response => {
            console.log(response.data);
        });
        axios.get('/celeb', {
          params: {
            celebOne: event.target.celebTwo.value,
          }
         
        }).then(response => {
            console.log(response.data);
            
        });
      }
  render() {
    
    return (
      <form onSubmit= {event => this.handleSubmit(event)}>
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
    );
  }
}

export default Formpage;
