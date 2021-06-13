const axios = require("axios")

;(async () => {
  const response = await axios.post(
    "https://ptsv2.com/t/g7rl0-1623597417/post",
    {
      name: "Roger",
      age: 8,
    },
    {
      headers: {
        "content-type": "application/json",
        authorization: "Bearer 123abc456def",
      },
    }
  )

  console.log(response.data)
})()
