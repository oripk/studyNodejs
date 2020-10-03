var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/')); // redirect bootstrap JS
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/popper.js', express.static(__dirname + '/node_modules/popper.js/dist')); // redirect popper.js

var server = app.listen(3000, function(){
	console.log("express server on port 3000")
});
