// includes
var calc = require('./lib/calc.js');
var express = require('express');
var app = express();

// setup
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// default page
app.get('/', function(request, response) {
   response.sendFile(__dirname + '/public/form.html');
});

// form processing
app.get('/getRate', function(request, response) {
   var type = request.query.type;
   var weight = request.query.weight;
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
