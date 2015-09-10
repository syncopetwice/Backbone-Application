var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var js = JSON.stringify(
    [
      {
        user_name: 'Oleja Drozdovsky',
        user_name_href: 'https://google.com',
        user_image: 'http://orig01.deviantart.net/e483/f/2012/189/8/f/chibi_bulbasaur_by_o_melet-d56ijzg.png',
        data_role: "Backbone Developer",
        data_annual_sales: "1,000,000",
        data_coach: "Michael Scott",
        data_predicted_sales: "1,500,000",
        new_opp_created: 9,
        new_opp_expected: 12,
        closed_won_wins: 7,
        closed_won_expected: 9,
        sales_vs_target_percentage: '25%',
        dates_sales: 300000,
        dates_target: 450000
      }
    ]
  );
  res.json(js);
});

module.exports = router;
