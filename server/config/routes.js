console.log('future routes');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');
var users = require('../controllers/users.js');

module.exports = function(app){

    app.get('/', function (req, res){
        res.sendFile('index.html', {root: __dirname + './../../client'});
    });
    app.get('/users', users.index);
    app.post('/users', users.create);
    app.get('/questions', questions.index);
    app.get('/questions/:id', questions.show);
    app.post('/questions', questions.create);
    app.put('/addanswer/:id', questions.addanswer);
    app.post('/answers', answers.create);
    app.put('/like/:id', answers.like);
}
