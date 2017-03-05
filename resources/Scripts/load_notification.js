/**
 * Created by wilsontsang on 2017-03-05.
 */

var deviceCount;

function displayAlerts(device) {

    $(document).ready(function () {
        $.ajax({
            url: "http://cuhackathon-challenge.martellotech.com/devices/" + device
        }).then(function (data) {

            console.log(data.name)
            $(notification_list).append(" <li class='list-group-item'>" + data.description + "</li>");
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

setInterval(getdeviceCount, 10000);