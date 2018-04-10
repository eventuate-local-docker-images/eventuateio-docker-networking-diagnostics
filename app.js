var request = require('request');
var http = require("http");

var myIP = process.env.DOCKER_HOST_IP;
var myPort = process.env.DOCKER_DIAGNOSTICS_PORT || 8889;
var url = 'http://' + myIP + ":" + myPort;

var http = require('http');

if (!myIP || myIP.trim().length == 1) {
  console.log("DOCKER_HOST_IP is not set or is blank");
  process.exit(-1);
}

console.log("DOCKER_HOST_IP=", myIP);

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(myPort, function () {
  console.log("Server running on port: " + myPort);
  console.log("About to make HTTP request to self");
  setTimeout(function () {
    console.log("Making HTTP request to self via url=", url);
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("SUCCESSS!!!!")
        server.close();
      } else {
        console.log("FAILURE: ", error);
        if (response)
          console.log("response.statusCode=", response.statusCode);
        server.close();
      };
    });
  }, 1000)

});
