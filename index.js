// includes
var calc = require('./lib/calc.js');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

// setup
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// default page
app.get('/', function(request, response) {
   response.sendFile(__dirname + '/public/form.html');
});

// form processing
app.post('/getRate', function(request, response) {
   var type = request.body.type;
   var weight = request.body.weight;
   calc.run(type, weight, function(err, data) {
      if (err) {
         console.log(err);
      } else {
         response.render("pages/result", data);
         response.send();
      }
   });
});

// initiate server
app.listen(app.get('port'), function() {
   console.log('Node app is running on port', app.get('port'));
});
