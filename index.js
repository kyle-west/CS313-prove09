/*************************************************************
* modules we would like to include
*************************************************************/
var calc       = require('./lib/calc.js');
var express    = require('express');
var bodyParser = require("body-parser");

/*************************************************************
* Create an express instance of our app.
*************************************************************/
var app = express();

/*************************************************************
* Connect to midleware, and set server values.
*************************************************************/
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*************************************************************
* Configure the default page for the user
*************************************************************/
app.get('/', function(request, response) {
   response.sendFile(__dirname + '/public/form.html');
});

/*************************************************************
* Form processing via the POST method
*************************************************************/
app.post('/getRate', function(request, response) {
   var type   = request.body.type;
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

/*************************************************************
* Initiate our server
*************************************************************/
app.listen(app.get('port'), function() {
   console.log('Node app is running on port', app.get('port'));
});
