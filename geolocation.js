var geolocationPlugin = {
    version : '1.0.0',
    watchID : '',

    init : function () {
        return JSON.stringify(navigator.geolocation);
    },
    // Register your function that will call the dialogs
    hook : function () {
        document.getElementById('status0').innerHTML = "hook() called";
        // You can listen to 'click', but 'touchend' by passes the inherent delay.
        // See: https://www.w3schools.com/jsref/dom_obj_event.asp
        document.getElementById('getCurrentPosition').addEventListener("click", geolocationPlugin.getCurrentPosition, false);
        document.getElementById('watchPosition').addEventListener("click", geolocationPlugin.watchPosition, false);
        document.getElementById('clearWatch').addEventListener("click", geolocationPlugin.clearWatch, false);
    },
    //
    getCurrentPosition : function () {
        document.getElementById('status0').innerHTML = "getCurrentPosition() called";
        //
        navigator.geolocation.getCurrentPosition(
            function (position) {
                document.getElementById('geolocationStuff').innerHTML =
                    'Latitude: '          + position.coords.latitude          + '<br />' +
                    'Longitude: '         + position.coords.longitude         + '<br />' +
                    'Altitude: '          + position.coords.altitude          + '<br />' +
                    'Accuracy: '          + position.coords.accuracy          + '<br />' +
                    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br />' +
                    'Heading: '           + position.coords.heading           + '<br />' +
                    'Speed: '             + position.coords.speed             + '<br />' +
                    'Timestamp: '         + position.timestamp;
            }, 
            geolocationPlugin.onError,
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
        );
        
    },
    //
    watchPosition : function () {
        document.getElementById('status0').innerHTML = "watchPosition() called";
        //
        geolocationPlugin.watchID = navigator.geolocation.watchPosition(
            function (position) {
                document.getElementById('geolocationStuff').innerHTML =
                    'Latitude: '          + position.coords.latitude          + '<br />' +
                    'Longitude: '         + position.coords.longitude         + '<br />' +
                    'Altitude: '          + position.coords.altitude          + '<br />' +
                    'Accuracy: '          + position.coords.accuracy          + '<br />' +
                    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br />' +
                    'Heading: '           + position.coords.heading           + '<br />' +
                    'Speed: '             + position.coords.speed             + '<br />' +
                    'Timestamp: '         + position.timestamp;
            }, 
            geolocationPlugin.onError,
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
        );
        
    },
    //
    clearWatch : function () {
        document.getElementById('status0').innerHTML = "clearWatch() called";
        //
        navigator.geolocation.clearWatch(geolocationPlugin.watchID);

    },
    //
    onError : function (errObject) {
        document.getElementById('errorCallback').innerHTML = 
            "Error: code=" + errObject.code + "<br/>" + errObject.message;
    }
}
