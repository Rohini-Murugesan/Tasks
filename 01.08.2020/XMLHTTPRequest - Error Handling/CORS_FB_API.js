
try {
// Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    console.log("Ready State (request not initialized) : " + request.readyState)
    console.log("Opening a connection")
    request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true)
    console.log("Ready State (server connection established) : " + request.readyState)
// Begin accessing JSON data here
    request.onload = function () {
        if (this.readyState === 4) {
            console.log("Request finished and Response is ready : " + request.readyState)
            if (this.status === 200) {
                console.log(request)
                var data = JSON.parse(this.response)
                console.log(data)
            } else {
                console.log("REQUEST FAILED!!!!!!")
            }
        }
    }

    request.onerror = function () {
        console.log("ERROR has occurred in the request")
    }

// Send request
    if (request.readyState === 1) {
        request.send()
        console.log("REQUEST IS SENT ")
    } else {
        console.log("THE REQUEST OBJECT IS NOT OPENED")
    }
//console.log("End")
}
catch(e){
    console.log("Exception : "+e.message)
}


