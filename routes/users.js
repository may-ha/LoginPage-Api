var express = require('express');
const DataService = require('../services/DataService');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  
  var userName = req.body.userName;
  var password = req.body.password;
  var dataService = new DataService();
  console.log(userName);
  console.log(password);
  dataService.login(userName,password).then(()=>{
    res.send('ok');
  }).catch(e=>{
      console.log(e);
      res.statusCode = 401;
      res.send(e);
  });
  
});

module.exports = router;
