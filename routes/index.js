var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '158.108.34.31',
  user: 'b6010545846',
  password: 'piyaphol.w@ku.th',
  database: 'b6010545846'
})

connection.connect()
console.log("connect!")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'InsuranceAPI' });
});

/* GET from health insurance */
router.get('/health', function(req, res){

  connection.query('SELECT * FROM `health_insurance`', function (err, rows, fields) {

    if (err) throw err 
      console.log('The solution is: ', rows)

    res.send(rows);

  })

});

/* GET from car insurance */
router.get('/car', function(req, res){

  connection.query('SELECT * FROM `car_insurance`', function (err, rows, fields) {

    if (err) throw err 
      console.log('The solution is: ', rows)

    res.send(rows);

  })

});

module.exports = router;
