goog.provide('hello.main');

/**
 * The main function for this example
 */
hello.main = function() {
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);
}

goog.exportSymbol('main',hello.main);