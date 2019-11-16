const express =  require('express');
const app = express();
const key = require('./key')
const bodyParser = require("body-parser");
const Clarifai = require('clarifai');
const ClarifaiApp = new Clarifai.App({
    apiKey: key.API_KEY
   });
   app.use(bodyParser.json());



const celebStat = () => {
    let number = Math.random() * 10;
    return number.toFixed(1);
  };
const getAllStats = () => {
    let stat = [];
   for (i =0; i < 4; i++)
   {    
       stat.push(celebStat());
   } 
   return stat;
}


app.get("/celeb", (req,res)=> {
  console.log("HII")
  ClarifaiApp.models.predict("e466caa0619f444ab97497640cefc4dc", req.query.celebOne).then(
    function(responseone) {
      console.log(responseone)
        res.json({
      name: responseone.outputs[0].data.regions[0].data.concepts[0].name,
      celebstats1: getAllStats(),
      health1: 0,
      image: req.query.celebOne
    })
    },
    function(err) {
      // there was an error
    }
  )
 
});
const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => [
    console.log(`Server is listening on Port ${PORT}`)
])

