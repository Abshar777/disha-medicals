var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/home').get( (req, res)=> {
   res.render('client/index');
})

//about page
router.route('/about').get( (req, res)=> {
  res.render('client/about');
})


module.exports = router;
