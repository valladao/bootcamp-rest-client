const http = require("https")

const options = {
  method: "GET",
  hostname: "dog.ceo",
  path: "/api/breeds/list/all",
}

const req = http.request(options, (res) => {
  const chunks = []

  res.on("data", (chunk) => {
    chunks.push(chunk)
  })

  res.on("end", () => {
    const body = Buffer.concat(chunks)
    const data = JSON.parse(body.toString())
    for (const breed in data.message) {
      console.log(breed)
    }
  })
})

req.end()
