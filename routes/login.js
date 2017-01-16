var express = require('express');
var router = express.Router();

var passport = require('passport');

require('../configs/passport.js')(passport);

router.post('/login', 
    passport.authenticate('local'),
    function(req, res) {
    	// res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  		// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return res.status(200).send();
    });

router.post('/logout', function(req, res){
    req.logout();
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  	// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return res.status(200).send();
});

module.exports.index = router;