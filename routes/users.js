var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var js = JSON.stringify(
    {
      user_name: "Oleja Drozdov",
      user_image: "http://www.iconpot.com/icon/preview/male-user-avatar.jpg"
    }
  );
  res.send(js);
});

module.exports = router;
