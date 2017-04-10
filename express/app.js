var express = require('express');
var app = express(); // Creates instance of express

app.get('/hello.txt', function(req, res){
    res.send('Hello, world!');
});

// Now we've completed our server, let's configure it in the browser...
var server = app.listen(8080, function(){
    console.log('Listening on port 8080...');
});