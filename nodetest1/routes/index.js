var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gtfs'
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/stops/*', function(req, res, next) {

  //TODO Sanitoi stringit
  var param_id = req['params'][0];
  var param_name = req['params'][0]+"%";

  connection.query('SELECT * FROM stops WHERE stop_id = ? OR stop_name LIKE ?', [param_id, param_name], function(err, rows, fields) {
    if (!err)
      res.json({rows});
    else
      res.json({message: 'Error while performing Query.', error: err});
  });

});

module.exports = router;
