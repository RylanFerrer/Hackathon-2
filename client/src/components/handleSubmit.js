import axios from "axios";

const handleSubmit = event => {
  event.preventDefault();

  axios
    .get("/celeb", {
      params: {
        celebOne: event.target.celebOne.value
      }
    })
    .then(response => {
      console.log(response.data);
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
        celeb1: response.data.name
      });
    });
};

export default handleSubmit;
