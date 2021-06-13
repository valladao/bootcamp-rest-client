const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const xhr = new XMLHttpRequest()

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    const breeds = JSON.parse(this.responseText).message
    for (const breed in breeds) {
      console.log(breed)
    }
  }
})

xhr.open("GET", "https://dog.ceo/api/breeds/list/all")

xhr.send()
