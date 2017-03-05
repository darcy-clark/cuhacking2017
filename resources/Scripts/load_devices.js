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
            device
            var device_name = data.name;

            $(device_list).prepend(" <li class='list-group-item' id = '"+ device + "' onclick='displayData(this.id)'" +">" + device_name + "</li>"
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


function displayData(id) {
    var newitem = true;


    $(document).ready(function () {
        $.ajax({
            url: "http://cuhackathon-challenge.martellotech.com/devices/" + id
        }).then(function (result) {

            console.log(result)
            $(details).html("");
            $.each(result, function(k, v) {
                //display the key and value pair
                console.log(k)
                if(k !== "alarms" && k!= "interfaces" && k != "oodl" && k != "battery")
                    $(details).append("<div class='child'>" + k + ": " + v + "</div>");

            });
        })


    });
}