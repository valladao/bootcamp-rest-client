const axios = require("axios")

;(async () => {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all")
  for (const breed in response.data.message) {
    console.log(breed)
  }
})()
