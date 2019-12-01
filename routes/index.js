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

  connection.query('SELECT * FROM `health_insurance` ORDER BY company_name', function (err, rows, fields) {

    if (err) throw err 
      console.log('The solution is: ', rows)

    res.send(rows);

  })

});



/* GET health insurance with expected value
   req = { "age": xx, "rate" : xx } 
   order by company name*/
router.post('/health/cost', function(req, res) {
 
  const body = req.body

  console.log(body)

  connection.query(`SELECT * FROM ${`health_insurance`} WHERE policy_period < ${body.age} AND premium_rate < ${body.rate} ORDER BY company_name`, function (err, rows, fields) {

    if (err) throw err 
      console.log('The solution is: ', rows)

    res.send(rows);

  })

});

/* GET health insurance with expected value
   req = { "age": xx, "rate" : xx } 
   order minimum premium rate */
   router.post('/health/cost/min', function(req, res) {
 
    const body = req.body
  
    console.log(body)
  
    connection.query(`SELECT * FROM ${`health_insurance`} WHERE policy_period < ${body.age} AND premium_rate < ${body.rate} ORDER BY premium_rate`, function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
  });

  /* GET health insurance with expected value
   req = { "age": xx, "rate" : xx } 
   order minimum cover expense */
   router.post('/health/cost/min/coverexpense', function(req, res) {
 
    const body = req.body
  
    console.log(body)
  
    connection.query(`SELECT * FROM ${`health_insurance`} WHERE policy_period < ${body.age} AND premium_rate < ${body.rate} ORDER BY covered_expense`, function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
  });

/* GET all insurance company */
   router.get('/company', function(req, res) {
 
    const body = req.body
  
    console.log(body)
  
    connection.query(`SELECT company_name FROM ${`health_insurance`} ORDER BY company_name`, function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
  });

  /* GET health insurance with expected insurance company
   req = { "company": xx} */
   router.post('/company/search', function(req, res) {
 
    const body = req.body
  
    console.log(body)
  
    connection.query(`SELECT * FROM ${`health_insurance`} WHERE company_name = "${body.company}" ORDER BY program_name`, function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
  });


/* GET all the disease */
router.get('/disease', function(req, res) {
 
  const body = req.body

  console.log(body)

  connection.query('SELECT symtomp FROM `disease` WHERE category = "ALL" ORDER BY symtomp', function (err, rows, fields) {

    if (err) throw err 
      console.log('The solution is: ', rows)

    res.send(rows);

  })

});


/** GET insurance from expected disease 
 * req = { "age": xx, "rate" : xx, "disease" : "xxx" }
*/
router.post('/health/disease', function(req, res) {
 
  const body = req.body

  console.log(body)
  console.log(body.age)

  connection.query(`SELECT * FROM ${`health_insurance`} JOIN ${`disease`} ON health_insurance.category = disease.category WHERE health_insurance.policy_period < ${body.age} AND health_insurance.premium_rate < ${body.rate} AND disease.symtomp = "${body.disease}" ORDER BY company_name`, function (err, rows, fields) {

    if (err) throw err 
      console.log('The solution is: ', rows)

    res.send(rows);

  })

});

/** GET insurance from expected disease order by premium rate 
 * req = { "age": xx, "rate" : xx, "disease" : "xxx" }
*/
router.post('/health/disease/min', function(req, res) {
 
  const body = req.body

  console.log(body)
  console.log(body.age)

  connection.query(`SELECT * FROM ${`health_insurance`} JOIN ${`disease`} ON health_insurance.category = disease.category WHERE health_insurance.policy_period < ${body.age} AND health_insurance.premium_rate < ${body.rate} AND disease.symtomp = "${body.disease}" ORDER BY premium_rate`, function (err, rows, fields) {

    if (err) throw err 
      console.log('The solution is: ', rows)

    res.send(rows);

  })

});

/** GET insurance from expected disease order by covere expense 
 * req = { "age": xx, "rate" : xx, "disease" : "xxx" }
*/
router.post('/health/disease/min/coverexpense', function(req, res) {
 
  const body = req.body

  console.log(body)
  console.log(body.age)

  connection.query(`SELECT * FROM ${`health_insurance`} JOIN ${`disease`} ON health_insurance.category = disease.category WHERE health_insurance.policy_period < ${body.age} AND health_insurance.premium_rate < ${body.rate} AND disease.symtomp = "${body.disease}" ORDER BY covered_expense`, function (err, rows, fields) {

    if (err) throw err 
      console.log('The solution is: ', rows)

    res.send(rows);

  })

});


module.exports = router;
