console.log('answer model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
    text: { type: String, required: [true, 'Must fill in answer with at least 5 characters'], minlength: [5, 'Must fill answer with at least 5 characters.']},
    details: { type: String, required: false, default: ""},
    likes: { type: Number, required: false, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'Users'},
    _question: {type: Schema.Types.ObjectId, ref: 'Questions'},
}, { timestamps: true });

mongoose.model('Answers', AnswerSchema);
