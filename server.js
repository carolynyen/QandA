require('./server/config/mongoose.js');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use( bodyparser.json() );
var path = require('path');
var root = __dirname;
var port = process.env.PORT || 8000;
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
var routesetter = require('./server/config/routes.js')(app);
app.listen( port, function() {
console.log( `server running on port ${ port }` );
});
