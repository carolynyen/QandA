app.controller('answerController', ['$scope', 'userFactory', 'questionFactory', 'answerFactory', '$routeParams', '$location', function($scope, userFactory, questionFactory, answerFactory, $routeParams, $location) {
  $scope.user = {};
  var index = function () {
      questionFactory.show($routeParams.id, function(question) {
          $scope.question = question;
          $scope.answers = $scope.question.answers;
      })
      userFactory.index(function(data, user) {
          $scope.users = data;
          $scope.user = user;
          if (Object.keys($scope.user).length === 0 && $scope.user.constructor === Object){
              $location.url('/index');
          }
      })
  }
  index();
  $scope.answer = function(){
      $location.url('/answers/'+$scope.question._id);
  }
  $scope.logout = function(){
      userFactory.logout();
      $location.url('/index')
  }
  $scope.goback = function(){
    $location.url('/dashboard');
  }
  $scope.backtoquestion = function(){
    $location.url('/questions/'+$scope.question._id);
  }
  $scope.like = function(questionid){
      answerFactory.like(questionid, function(data){
          index();
      })
  }
  $scope.create = function() {
      $scope.messages = {message: ""};
      if ($scope.newAnswer == undefined){
          $scope.messages = {message: "Must fill in answer field to submit answer."}
      }
      else {
          $scope.newAnswer._user = $scope.user._id;
          $scope.newAnswer._question = $scope.question._id;
          answerFactory.create($scope.newAnswer, function(data) {
              if (data.name == "ValidationError"){
                  $scope.messages = {message: data.errors.text.message}
              }
              else {
                  $scope.newAnswer = {};
                  questionFactory.addanswer(data, function(data){
                      index();
                      $location.url('/dashboard');
                  });
              }
          });
      }
  }
}]);
