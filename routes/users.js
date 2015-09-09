var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var js = JSON.stringify(
  [
  {
    name: "Oleja",
    money: "800"
  },
  {
    name: "Leha",
    money: "1500"
  }
  ]
  );
  res.send(js);
});

module.exports = router;
