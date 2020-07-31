// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data)
}

// Send request
request.send()