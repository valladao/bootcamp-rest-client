const request = require("request")

const options = {
  method: "GET",
  url: "https://dog.ceo/api/breeds/list/all",
  json: true,
}

request(options, (error, response, body) => {
  if (error) throw new Error(error)

  for (const breed in body.message) {
    console.log(breed)
  }
})
