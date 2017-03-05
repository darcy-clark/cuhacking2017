/**
 * Created by wilsontsang on 2017-03-05.
 */

var deviceCount;

function displayAlerts(device) {

    $(document).ready(function () {
        $.ajax({
            url: "http://cuhackathon-challenge.martellotech.com/devices/" + device
        }).then(function (data) {

            if (data.alarms != undefined && data.alarms.length != 0 && data.alarms != []){
                $(alarm_list).append(" <li class='list-group-item'>" + data.alarms[0].message + "</li>");
            }
        });
    });
}

function getdeviceCount() {
    var client = new HttpClient();
    client.get('http://cuhackathon-challenge.martellotech.com/devices', function(response) {
        // do something with response
        var response_json = JSON.parse(response);
        deviceCount =Object.keys(response_json).length

        for(var count = 0; count < deviceCount; count++) {
            displayAlerts(count)
        }

    });
}

setInterval(getdeviceCount, 5000);