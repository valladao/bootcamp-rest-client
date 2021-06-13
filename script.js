const http = require("https")

const data = JSON.stringify({ name: "Roger", age: 8 })

const options = {
  method: "POST",
  hostname: "ptsv2.com",
  port: null,
  path: "/t/g7rl0-1623597417/post",
  headers: {
    "content-type": "application/json",
    authorization: "Bearer 123abc456def",
    "content-lenght": data.length,
  },
}

const req = http.request(options, (res) => {
  const chunks = []

  res.on("data", (chunk) => {
    chunks.push(chunk)
  })

  res.on("end", () => {
    const body = Buffer.concat(chunks)
    console.log(body.toString())
  })
})

req.write(data)
req.end()
