console.log('user controller');
var mongoose = require('mongoose');
var User = mongoose.model('Users');

module.exports = {
  index: function(req,res){
      User.find({}, function(err, users) {
            if(err) {
                console.log(err);
            }
            else {
                res.json(users);
            }
       })
  },
  show: function(req,res){
      User.find({_id: req.params.id}, function(err, user) {
            if(err) {
                res.json(err);
              }
            else {
                res.json(user[0]);
            }
       })
  },
  create: function(req,res){
      User.find({name: req.body.name}, function(err, users) {
            if(err) {
                console.log(err);
                res.json(err);
              }
            else {
                if (users[0] == undefined){
                    User.create(req.body, function(err, result){
                        if(err){
                            res.json(err)
                        }
                        else {
                            console.log('new user')
                            res.json(result)
                        }
                    }
                )}
                else {
                    console.log('old user')
                    res.json(users[0]);
                }
            }
       })
  }
}
