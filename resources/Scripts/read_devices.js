
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
    }
}

function createDevices(myJSON) {
    deviceArray.push(myJSON);
}

make_request_all();