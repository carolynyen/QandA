console.log('question controller');
var mongoose = require('mongoose');
var Question = mongoose.model('Questions');
var Answer = mongoose.model('Answers');
var User = mongoose.model('Users');

module.exports = {
  index: function(req,res){
      Question.find({}, false, true)
      .populate({path: 'answers', model: 'Answers', populate: [{path: '_user', model: 'Users'}]})
      .exec(function(err, questions){
        if (err){
            console.log(err);
        }
        else {
            res.json(questions);
        }
    });
  },
  show: function(req,res){
      Question.find({_id: req.params.id})
      .populate({path: 'answers', model: 'Answers', populate: [{path: '_user', model: 'Users'}]})
      .exec(function(err, question) {
            if(err) {
                console.log(err);
                res.json(err);
              }
            else {
                res.json(question[0]);
            }
       })
  },
  create: function(req,res){
      Question.create(req.body, function(err, result){
          if(err){
              res.json(err)
          }
          else {
              res.json(result)
          }
      })
  },
  addanswer: function(req, res){
      Question.findOne({_id: req.params.id}, function(err, question){
         question.answers.push(req.body.id);
         question.save(function(err){
            if(err) {
                res.json(err);
            } else {
                res.json(question)
            }
        });
   });
  },
}
