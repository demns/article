var User = require('../models/User');

module.exports.createUser = function(user) {
	var newUser = new User({
        username: user.username,
        password: user.password
    });

    return new Promise(function(resolve, reject) {
    	User.createUser(newUser, function(err, user) {
    		if (err) {
    			reject(err);
    		} 
    		resolve(user);
    	});
    });    
};