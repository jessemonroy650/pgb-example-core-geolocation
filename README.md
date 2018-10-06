# pgb-example-core-geolocation
PGB Example Core using the Cordova 'Geolocation' plugin using `cli-6.0.0`

This app uses the Cordova 'Device' & 'Geolocation' plugins.

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-geolocation

**Reminder** make sure to turn off geolocation permission so you can test that aspect of the app.

## Methods

* navigator.geolocation.getCurrentPosition
* navigator.geolocation.watchPosition
* navigator.geolocation.clearWatch

### geolocationOptions
* **enableHighAccuracy:** Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a `Position` using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning. (Boolean)
* **timeout:** The maximum length of time (milliseconds) that is allowed to pass from the call to *navigator.geolocation.getCurrentPosition* or *geolocation.watchPosition* until the corresponding geolocationSuccess callback executes. If the _geolocationSuccess_ callback is not invoked within this time, the _geolocationError_ callback is passed a `PositionError.TIMEOUT` error code. (Note that when used in conjunction with *geolocation.watchPosition*, the _geolocationError_ callback could be called on an interval every timeout milliseconds!) (Number)
* **maximumAge:** Accept a cached position whose age is no greater than the specified time in milliseconds. (Number)


### Android Quirks
> If Geolocation service is turned off the *onError* callback is invoked after timeout interval (if specified). If timeout parameter is not specified then no callback is called.

## Objects (Read-Only)

* Position
  * **coords:** A set of geographic coordinates. (Coordinates)
  * **timestamp:** Creation timestamp for coords. (DOMTimeStamp)

* PositionError
  * **code:** One of the predefined error codes listed below.
    * `PositionError.PERMISSION_DENIED`, `PositionError.POSITION_UNAVAILABLE`, `PositionError.TIMEOUT`
  * **message:** Error message describing the details of the error encountered.

* Coordinates
  * **latitude:** Latitude in decimal degrees. (Number)
  * **longitude:** Longitude in decimal degrees. (Number)
  * **altitude:** Height of the position in meters above the ellipsoid. (Number)
  * **accuracy:** Accuracy level of the latitude and longitude coordinates in meters. (Number)
  * **altitudeAccuracy:** Accuracy level of the altitude coordinate in meters. (Number)
  * **heading:** Direction of travel, specified in degrees counting clockwise relative to the true north. (Number)
  * **speed:** Current ground speed of the device, specified in meters per second. (Number)

### Android Quirks
> **altitudeAccuracy:** Not supported by Android devices, returning null.


