var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var path = require('path');  
var multer = require('multer');


var Home = require('../models/home');


/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.post('/edit/:id', function(req, res, next) {
  var homeMainTitle = req.body.homemaintitle;
  var homeSecondTitle = req.body.homesecondtitle;
    // create elements in database
    Home.findOneAndUpdate({ _id: req.params.id },
      { homemaintitle: homeMainTitle, homesecondtitle:homeSecondTitle} , function(err, home){
      if(err) res.render('error', { error: 'Error creating your record :('})
      req.flash('success', 'You changed the title of the home page!');
      res.redirect('/');
    });
});



function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
