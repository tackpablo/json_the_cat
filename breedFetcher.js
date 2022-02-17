const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(`Failed to request details. Details: `, null);
    }

    const data = JSON.parse(body); // parse the JSON into object

    if (!data[0]) callback(undefined, undefined);
    else callback(undefined, data[0].description);
  });
};

module.exports = { fetchBreedDescription };

// old code
// const breed = process.argv.slice(2);
// const apiUrl = "https://api.thecatapi.com/v1/breeds/search?q=";

// request(`${apiUrl}${breed}`, (error, response, body) => {
//   // Request failed
//   if (error) {
//     return console.log(`Failed to request details. Details: `, error);
//   }
//   // // console.log("error:", error);
//   // // console.log("body:", body);
//   // // console.log("response: ", response);

//   // Breed not found
//   if (error === null) {
//     return console.log(`Requested ${breed} could not be found.`);
//   }

//   // console.log(body); // body is JSON
//   // console.log(typeof body); // body is type string

//   const data = JSON.parse(body); // parse the JSON into object
//   // console.log(data); // check the data
//   // console.log(typeof data); // data is type object

//   console.log(data[0].description);
// });
