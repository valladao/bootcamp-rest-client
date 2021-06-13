document.addEventListener(
  "DOMContentLoaded",
  () => {
    const requests = [
      {
        url: "https://flaviocopes-cors-example-express.glitch.me/without-cors",
        container: "response-one",
      },
      {
        url: "https://flaviocopes-cors-example-express.glitch.me/with-cors",
        container: "response-two",
      },
    ]

    for (const request of requests) {
      fetch(request.url)
        .then((response) => {
          response.json().then((data) => {
            document
              .getElementById(request.container)
              .getElementsByTagName("p")[0].innerHTML = data.msg
          })
        })
        .catch((err) => {
          document
            .getElementById(request.container)
            .getElementsByTagName("p")[0].innerHTML = "CORS Error! 😯"
        })
    }
  },
  false
)
