
var inJSON;
var deviceArray = [];
var firstJSON = true;
var numDevices;

function createJSON(myJSON) {
    inJSON = myJSON;
    numDevices = Object.keys(inJSON).length;
    console.log('Num Devices: ' + numDevices);
    for(var count = 1; count < numDevices; count++) {
        make_request('devices/' + count);
        //console.log(deviceArray.length);
        // $(document).ready(function(){
        //     $(device_list).append(" <li class='list-group-item'>" + deviceArray[0].description + "</li>");
        // });
    }
    firstJSON = false;
}

function createDevices(myJSON) {
    deviceArray.push(myJSON);
    //console.log(deviceArray[0].description);
    console.log(deviceArray.length);
    $(document).ready(function(){
        $(device_list).append(" <li class='list-group-item'>" + deviceArray[deviceArray.length - 1].name + "</li>");
    });
}

make_request_all();