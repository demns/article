var User = require('../models/User');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
	    done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	    User.getUserById(id, function(err, user) {
	        done(err, user);
	    });
	});

	passport.use(new LocalStrategy(
	    function(username, password, done) {
	        User.findUserByUsername(username, function(err, user) {
	            if (!user) {
	                return done(null, false, {
	                    message: 'Unknown User'
	                });
	            }
	            User.comparePassword(password, user.password, function(err, isMatch) {
	                if (isMatch) {
	                    return done(null, user);
	                } else {
	                    return done(null, false, {
	                        message: 'Invalid password'
	                    })
	                }
	            });
	        });
	    }
	));
};