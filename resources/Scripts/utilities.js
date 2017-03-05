var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

function make_request(extension) {
	var client = new HttpClient();
	client.get('http://cuhackathon-challenge.martellotech.com/' + extension, function(response) {
    // do something with response
    var response_json = JSON.parse(response)
    console.log (response_json)
});
}


//Usage
console.log(make_request("devices/1"))