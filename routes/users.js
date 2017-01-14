var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

router.post('/create', function(req, res) {
    var newUser = {
        username: req.body.username,
        password: req.body.password,
    };

    UserController.createUser(newUser).then((user) => {
        return res.status(201).send();
    })
    .catch((error) => {
        console.log(error);
    	return res.status(500).send();
    });

});

module.exports.index = router;