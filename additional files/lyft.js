// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var lyft = require('node-lyft');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: Client Authentication
var clientAuth = defaultClient.authentications['Client Authentication'];
clientAuth.accessToken = '---------------------';

var apiInstance = new lyft.PublicApi();

var opts = {
    'endLat': 37.7972, // Latitude of the ending location
    'endLng': -122.4533 // Longitude of the ending location
};

app.get('/', function(request, response) {
    apiInstance.getCost(37.7763, -122.3918, opts).then(function(res) {
        response.json(res);
        console.log('API called successfully. Returned data: ' + JSON.stringify(res));
    }, function(error) {
        console.error(error);
    });
});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});