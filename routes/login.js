var express = require('express');
var router = express.Router();

var passport = require('passport');

require('../configs/passport.js')(passport);

router.post('/login',
    passport.authenticate('local'),
    function(req, res) {
        return res.status(200).redirect('/articles/new');
    });

router.get('/login', function(req, res) {
    res.render('login', {});
});

router.post('/logout', function(req, res){
    req.logout();

    return res.status(200).send();
});

router.get('/registration', function(req, res) {
    res.render('registration', {});
});

module.exports = router;