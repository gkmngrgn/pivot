var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pivot');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Article = new Schema({
    title: {type: String, default: '', required: true},
    body: {type: String, default: ''},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

mongoose.model('Article', Article);
Article = module.exports.Article = mongoose.model('Article');