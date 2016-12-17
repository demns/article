var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    },
    registration_date: {
        type: Date,
        default: Date.now
    }
});


var User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.updateUser = function(updateUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(updateUser.password, salt, function(err, hash) {
            updateUser.password = hash;
            updateUser.save(callback);
        });
    });
};

module.exports.findUserByUsername = function(username, callback) {
    var query = { 'username' : username };
    User.findOne(query, callback);
};

module.exports.getUserById = function(userId, callback) {
    User.findById(userId, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(!err) {
            callback(null, isMatch);
        }
    });
}
