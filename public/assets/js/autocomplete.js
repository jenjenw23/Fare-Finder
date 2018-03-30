// JavaScript Document

var placeSearch, autocomplete;

 var startLat;
 var startLon;
 var endLat; 
 var endLon;

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('autocomplete')), {
            types: ['geocode']
        });
    autocomplete2 = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('autocomplete2')), {
            types: ['geocode']
        });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
    autocomplete2.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    startLat = place.geometry.location.lat();
    startLon = place.geometry.location.lng();
    console.log("startLat = " + startLat);
    console.log("startLon = " + startLon);

    var place2 = autocomplete2.getPlace();
    
    endLat = place2.geometry.location.lat();
    endLon = place2.geometry.location.lng();
    console.log("endLat = " + endLat);
    console.log("endLon = " + endLon);
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    //console.log("geolocate");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}


//module.exports.startLat = startLat;