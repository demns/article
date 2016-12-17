var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    link: String,
    creation_date: {
        type: Date,
        default: Date.now
    },
    imageHash: String
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
