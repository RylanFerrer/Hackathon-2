const express =  require('express');
const app = express();
const key = require('./key')
const axios = require('axios');
const Clarifai = require('clarifai');
const ClarifaiApp = new Clarifai.App({
    apiKey: key.API_KEY
   });

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


app.get("/celeb", (req,res) => {
 

    ClarifaiApp.models.predict("e466caa0619f444ab97497640cefc4dc","https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2016/07/forrest_gump_still.jpg").then(
        function(responseOne) {
            

            ClarifaiApp.models.predict("e466caa0619f444ab97497640cefc4dc","https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2016/07/forrest_gump_still.jpg").then(
                function(responseTwo) {
                    const celebs = {
                        celeb1: responseOne.outputs[0].data.regions[0].data.concepts[0].name,
                        celebstats1: getAllStats(),
                        health1: 0,
                        celeb2: responseTwo.outputs[0].data.regions[0].data.concepts[0].name,
                        celebstats2: getAllStats(),
                        celeb2:0,
                    }   
                    res.json(celebs)
                    
                  },
                  function(err) {
                    // there was an error
                    console.log(err)
                  }
            )        
            
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

/* axios.post(/celeb).then(res=> {

}) */