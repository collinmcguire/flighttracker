const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://adsbexchange-com1.p.rapidapi.com/v2/registration/N8737L/',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.HOST
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});