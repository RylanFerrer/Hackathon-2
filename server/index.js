const express =  require('express');
const app = express();
const key = require('./key')
const axios = require('axios');
const Clarifai = require('clarifai');
const ClarifaiApp = new Clarifai.App({
    apiKey: key.API_KEY
   });
app.get("/celeb", (req,res) => {
    ClarifaiApp.models.predict("e466caa0619f444ab97497640cefc4dc","https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2016/07/forrest_gump_still.jpg").then(
        function(response) {
            // do something with response
            const celeb = {
                name:response.outputs[0].data.regions[0].data.concepts[0].name
            }
            res.json(celeb)
          },
          function(err) {
            // there was an error
            console.log(err)
          }

    )
});

const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => [
    console.log(`Server is listening on Port ${PORT}`)
])