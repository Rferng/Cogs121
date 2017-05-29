var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/', function(request, response) {
  response.render('index',
            { title: 'Ghost Tag',});
});

app.get('/select', function(request, response) {
  response.render('select',
            { title: 'Choose Your Role',});
});

app.get('/record', function(request, response) {
  response.render('record',
            { title: 'Hide!',});
});

app.get('/find', function(request, response) {
  response.render('find',
            { title: 'Seek the Ghost',});
});

app.get('/rate', function(request, response) {
  response.render('rate',
            { title: 'Rate your Route',});
});

app.get('/wait', function(request, response) {
  response.render('wait',
            { title: 'wait for the seeker',});
});

app.get('/navigate', function(request, response) {

    console.log(request.query);


    var locationName = request.query.locationSearch;


  response.render('navigate',
            { title: 'Follow These Directions',
              locationName: locationName, });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
