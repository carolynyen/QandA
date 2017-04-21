console.log('answers controller');
var mongoose = require('mongoose');
var Answer = mongoose.model('Answers');

module.exports = {
    like: function(req, res){
        Answer.find({_id: req.params.id}, function(err, answer) {
              if(err) {
                  console.log("can't find answer to like");
              }
              else {
                Answer.update({_id: req.params.id}, {$inc: {likes: 1}}, function(err){
                    if(err) {
                        console.log("can't add a like");
                    }
                    else {
                        res.json({message:'you liked this successfully'});
                    }
                })
             }
         })
    },
  create: function(req,res){
      Answer.create(req.body, function(err, result){
          if(err){
              res.json(err)
          }
          else {
              res.json(result)
          }
      })
  }
}
