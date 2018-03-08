var express = require('express');
var cors = require('cors');
//helps parse the data that is posted to this api
var bodyParser = require('body-parser');

//creating application instance
var app = express();

app.set('view engine', 'ejs');

//adding middleware, customized plyg-ins that we can use to add functionality to our express app
//1. adding body-parser for post data and url-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false})); // set to true when we have large amount of nested data

//2. our custom middleware
app.use(function(req, res, next){
	console.log(`${req.method} for ${req.url}, ${JSON.stringify(req.body)}`);
	next();
});

//3. static file server, that comes with express
app.use(express.static('./public')); //takes name of directory where we would like to serve the files from

//4. adding cors- cross origin resource sharing, that means any domain can make request for out dictionary api
app.use(cors());

//routing dictionary-api
app.use(require('./dick'));

//app will listen at port 3000
app.listen(3000);

console.log("App running on 3000.")


//exporting app as module, so that we can use this application instance in other files
module.exports = app;