const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const xhr = new XMLHttpRequest()

const data = JSON.stringify({
  name: "Roger",
  age: 8,
})

xhr.withCredentials = true

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText)
  }
})

xhr.open("POST", "https://ptsv2.com/t/g7rl0-1623597417/post")
xhr.setRequestHeader("content-type", "application/json")
xhr.setRequestHeader("authorization", "Bearer 123abc456def")

xhr.send(data)
