/**
 * Created by wilsontsang on 2017-03-05.
 */

var deviceCount;
var listNotifications = new Array()
$(document).ready(function () {
    getdeviceCount()
});


function displayAlerts(device) {

    $(document).ready(function () {
        $.ajax({
            url: "http://cuhackathon-challenge.martellotech.com/devices/" + device
        }).then(function (data) {

            var device = data.name;

                $(device_list).prepend(" <li class='list-group-item'>" + device + "</li>"
                );

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

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            console.log(myArray[i].name + " " + nameKey)
            return true;
        }
    }
}


