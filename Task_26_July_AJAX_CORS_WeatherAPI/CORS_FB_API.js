// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
console.log("Opening a connection")
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true)

// Begin accessing JSON data here
request.onload = function() {
    console.log("Get Data")
    console.log(request)
    // console.log(typeof(this.response)) // string
    // console.log(this.response)
    var data = JSON.parse(this.response)
    console.log(data)
}

// Send request
console.log("Send request")
request.send()

console.log("End")


