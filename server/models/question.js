console.log('question model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
     question: { type: String, required: [true, 'Must fill in question field with at least 10 characters.'], minlength: [10, 'Must fill question with at least 10 characters.']},
     answers: [{type: Schema.Types.ObjectId, ref: 'Answers'}],
     description: { type: String, required: false, default: ""},
}, { timestamps: true });

mongoose.model('Questions', QuestionSchema);
