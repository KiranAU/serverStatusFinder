const axios = require("axios");
const url =
  "https://api.myjson.com/bins/du3uf";
  
function checkServerStatus(){
    axios
   .get(url)
   .then(response => {
    var data = response.data;

for(var i in data)
{
     
     if( data[i].priority < 3){
         console.log( "Server :" + data[i].url + " is offline.")
     } else if ( data[i].priority > 3){
         console.log( "Server :" + data[i].url + " is online.")
     }
}

  })
  .catch(error => {
    console.log(error);
 });
}

checkServerStatus();
