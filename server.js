var express     = require('express');
var app         = express();
var router      = express.Router();
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var database    = require('./config/database');

mongoose.connect(process.env.MONGOHQ_URL || database.url);

// Configuration
app.set('port', (process.env.PORT || 8080));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
})

// Routes
router.get('/', function(req, res) {
  res.json({ message: 'Hooray! welcome to our api!' });
});

require('./config/routes')(router);

// Route prefix
app.use('/api', router);

app.listen(app.get('port'));
console.log('App listening on port ' + app.get('port'));

module.exports = app;
