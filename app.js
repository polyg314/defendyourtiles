var express  = require('express');
var app      = express();                
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


// app.use(require('connect-asset'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");

app.get('/', function(req, res){
	res.render('index.ejs');
})