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


router.get('/', function(req, res){

    connection.query('SELECT * FROM `user_detail`', function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
  });

/** add insurance program of user. */
router.post('/add', function(req, res){

    const body = req.body

    console.log(body)

    connection.query(`INSERT INTO ${'`user_detail`'}(${'`personal_id`'}, ${'`name`'}, ${'`date_of_birth`'}, ${'`program_name`'}, ${'`company_name`'}) VALUES ([${body.id}],[${body.name}],[${body.birthdate}],[${body.program}],[${body.company}])`, function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
});

/** get insurance program of each user. */
router.post('/details', function(req, res){

    const body = req.body

    console.log(body)

    connection.query(`SELECT ${'`program_name`'}, ${'`company_name`'} FROM ${'`user_detail`'} WHERE personal_id = ${body.id}`, function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
});  

module.exports = router;
