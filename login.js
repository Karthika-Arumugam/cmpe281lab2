var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
    response.loggedin=true;
	response.redirect('/home');	
	response.end();
});

app.get('/home', function(request, response) {
	response.send('<h1>Welcome back, Karthika!</h1>');
	response.end();
});

app.listen(8080, function(){
    console.log( "Server listening on port:%s", 8080);
});

//app.listen(3000, "cs-6000-devshell-vm-1bf1a1a0-ac3d-4be3-a729-3ec7280ee5ac", 34, function(){
//    console.log( "Server listening on port:%s", 3000);
//});
// Start the server

