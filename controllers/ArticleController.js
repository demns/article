var Article = require('../models/Article');

module.exports.getLastArticles = function(){
	return new Promise(function(resolve, reject) {
		Article.find()
        .sort({
            'creation_date': -1
        })
        .exec(function(err, articles) {
            if (err) {
                console.log(err);
            	reject(err);
            }
            resolve(articles)
        });
	})
};

module.exports.addArticle = function(article) {
	var newArticle = new Article({
        author: article.author,
        description: article.description,
        title: article.title,
        link: article.link,
        imageHash: article.imageHash
    });

    return new Promise(function(resolve, reject) {
    	newArticle.save(function(err) {
    		if (err) {
                console.log(err);
    			reject(err);
    		}
    		resolve();
    	});
    });
    	
};

module.exports.deleteArticle = function(id) {
	return new Promise(function(resolve, reject) {
		Article.findById(id, function(err, article) {
        	return article.remove(function(err) {
        		if (err) {
                    console.log(err);
        			reject(err);
        		}
        		resolve();
        	});
    	});
	});
}