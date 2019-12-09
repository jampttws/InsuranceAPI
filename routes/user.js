var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');


var connection = mysql.createConnection({
  host: '158.108.34.31',
  user: 'b6010545846',
  password: 'piyaphol.w@ku.th',
  database: 'b6010545846'
})  

connection.connect()
console.log("user connect!")

/** get all user*/
router.get('/', function(req, res){

    connection.query('SELECT * FROM `user_detail`', function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
  });

/** add insurance program of user. 
 * { 'id': xxx, 'name' : 'yyy', 'birthdate' : 'yyyy-mm-dd', 'program' : 'zzz', 'company' : 'kkk'}
*/
router.post('/addinsurance', function(req, res){

    const body = req.body

    console.log(body)

    connection.query(`INSERT INTO ${'`user_detail`'}(${'`personal_id`'}, ${'`name`'}, ${'`date_of_birth`'}, ${'`program_name`'}, ${'`company_name`'}) VALUES (${body.id}, '${body.name}', '${body.birthdate}', '${body.program}', '${body.company}')`, function (err, rows, fields) {

        if (err) throw err 
        console.log('The solution is: ', rows)

        res.send(rows);

    })
  
});

/** get insurance program of each user. 
 * { 'id' : xxx}
*/
router.post('/details', function(req, res){

    const body = req.body

    console.log(body)

    connection.query(`SELECT * FROM ${'`user_detail`'} JOIN ${`insurance_pic`} ON user_detail.company_name = insurance_pic.company WHERE personal_id = ${body.id}`, function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
      res.send(rows);
  
    })
  
});  

/** get insurance program of each user. 
 * { 'id' : xxx, 'disease' : 'yyy'}
*/
router.post('/details/disease', function(req, res){

    const body = req.body

    console.log(body)

    connection.query(`SELECT DISTINCT user_detail.program_name, user_detail.company_name 
        FROM ${'`user_detail`'} JOIN ${'`health_insurance`'} 
        ON user_detail.program_name = health_insurance.program_name
        WHERE health_insurance.program_name IN 
            ( SELECT health_insurance.program_name FROM ${'`health_insurance`'}
            JOIN ${'`disease`'} ON health_insurance.category = disease.category
            WHERE disease.symtomp = "${body.disease}" )
        AND user_detail.personal_id = ${body.id}`, function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
      res.send(rows);
  
    })
  
});  

/**add new user account
 * { 'id' : xxx, 'name' : 'yyy', 'password' : 'zzz' }
 */
router.post('/newuser', function(req, res) {

    const body = req.body

    console.log(body)

    var encryptPass = cryptr.encrypt(body.password);

    connection.query(`SELECT ${'`personal_id`'} FROM ${'`user_account`'}`, function (err, rows, fields) {

        if (err) throw err 
        console.log('The solution is: ', rows)

        var matchId = false;

        rows.forEach(element => {
            if(element.personal_id === body.id){
                matchId = true;
            } 
        });

        if(matchId){

            console.log('already have this account.')
            res.send(JSON.parse('{ "status" : "fail"}'));

        } else {
            
            connection.query(`INSERT INTO ${'`user_account`'}(${'`personal_id`'}, ${'`name`'}, ${'`password`'}) VALUES (${body.id},'${body.name}', '${body.password}')`, function (err, rowss, fields) {

                if (err) throw err 
                res.send(JSON.parse('{ "status" : "success"}'));
            })   
        }  

    })

});

/** get all user account. */
router.get('/allaccount', function(req, res){

    connection.query('SELECT * FROM `user_account`', function (err, rows, fields) {
  
        if (err) throw err 
          console.log('The solution is: ', rows)
    
        res.send(rows);
    
    })

});

/** get company logo */
router.get('/logo', function(req, res){

    connection.query('SELECT * FROM `insurance_pic`', function (err, rows, fields) {
  
      if (err) throw err 
        console.log('The solution is: ', rows)
  
      res.send(rows);
  
    })
  
  });

module.exports = router;
