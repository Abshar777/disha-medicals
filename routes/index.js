var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/').get((req,res)=>{
  res.redirect('/home')
})

router.route('/home').get( (req, res)=> {

   res.render('client/index');
})

//about page
router.route('/about').get( (req, res)=> {
  res.render('client/about');
})

//serives page
router.route('/service').get( (req, res)=> {
  res.render('client/service');
})

//serives page
router.route('/contact').get( (req, res)=> {
  res.render('client/contact');
})

//courses page
router.route('/course').get( (req, res)=> {
  res.render('client/courses');
})

//serives page
router.route('*').get( (req, res)=> {
  res.render('client/404');
})



module.exports = router;
