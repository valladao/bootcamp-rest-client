const fetch = require("node-fetch")

const data = JSON.stringify({ name: "Roger", age: 8 })

;(async () => {
  const response = await fetch("https://ptsv2.com/t/g7rl0-1623597417/post", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer 123abc456def",
    },
    body: data,
  })
  console.log(await response.text())
})()
