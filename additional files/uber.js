// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

var Uber = require('node-uber');

var uber = new Uber({
  client_id: '-----------',
  client_secret: '-----------------',
  server_token: '--------------------',
  redirect_uri: 'http://localhost',
  name: 'Test'
});

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3600;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

app.get('/api/login', function (request, response) {
  uber.products.getAllForAddressAsync('1455 Market St, San Francisco, CA 94103, US')
    .then(function (res) {
      response.json(res);
      
      // for (var i=0;i<res.products.length;i++) {
      //   console.log(res.products[i].product_id);
      //   console.log(res.products[i].price_details);
      // }
    })
    .error(function (err) { console.error(err); });
});

app.get('/', function (request, response) {
  uber.estimates.getPriceForRouteAsync(3.1357169, 101.6881501, 3.0833, 101.6500)
    .then(function (res) {
      response.json(res);
    })
    .error(function (err) { console.error(err); });
});

//uber.estimates.getPriceForRouteByAddressAsync(start_address, end_address, [, seats]);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});