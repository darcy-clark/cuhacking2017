/**
 * Created by wilsontsang on 2017-03-05.
 */

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        };

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
};

var deviceCount;

function displayAlerts(device) {

    $(document).ready(function () {
        $.ajax({
            url: "http://cuhackathon-challenge.martellotech.com/devices/" + device
        }).then(function (data) {

            console.log(data.name)
            $(device_list).append(" <li class='list-group-item'>" + data.name + "</li>");
        });
    });
}

function getdeviceCount() {
    var client = new HttpClient();
    client.get('http://cuhackathon-challenge.martellotech.com/devices', function(response) {
        // do something with response
        var response_json = JSON.parse(response);
        deviceCount =Object.keys(response_json).length
        console.log (deviceCount);

        for(var count = 0; count < deviceCount; count++) {
            displayAlerts(count)
        }

    });
}

//setInterval(getdeviceCount, 1000);

getdeviceCount();