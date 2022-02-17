const request = require("request");

const breed = process.argv.slice(2);
const apiUrl = "https://api.thecatapi.com/v1/breeds/search?q=";

request(`${apiUrl}${breed}`, (error, response, body) => {
  // Request failed
  if (error) {
    return console.log(`Failed to request details. Details: `, error);
  }
  // console.log("error:", error);
  // console.log("body:", body);
  // console.log("response: ", response);

  // Breed not found
  if (error === null) {
    return console.log(`Requested breed could not be found.`);
  }

  // console.log(body); // body is JSON
  // console.log(typeof body); // body is type string

  const data = JSON.parse(body); // parse the JSON into object
  // console.log(data); // check the data
  // console.log(typeof data); // data is type object

  console.log(data[0].description);
});
