var ArticleModel = require('../model').Article;

module.exports = {
    index: function(req, res) {
        ArticleModel.find({}, function(err, articles) {
            res.render(articles);
        });
    }
};