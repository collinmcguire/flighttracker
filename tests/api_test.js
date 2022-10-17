const axios = require("axios");
const config = require("../.config/flighttracker.json");

const options = {
  method: 'GET',
  url: 'https://adsbexchange-com1.p.rapidapi.com/v2/registration/N8737L/',
  headers: {
    'X-RapidAPI-Key': config.APIKey,
    'X-RapidAPI-Host': config.host
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});