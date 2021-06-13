const fetch = require("node-fetch")

;(async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all", {
    method: "GET",
  })

  const data = await response.json()
  for (const breed in data.message) {
    console.log(breed)
  }
})()
