app.controller('questionController', ['$scope', 'userFactory', 'questionFactory', '$routeParams', '$location', function($scope, userFactory, questionFactory, $routeParams, $location) {
    $scope.newQuestion = {};
    $scope.user = {};
  var index = function () {
      questionFactory.index(function(data) {
          $scope.questions = data;
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
  $scope.create = function() {
      $scope.messages = {message: ""};
      questionFactory.create($scope.newQuestion, function(data) {
        if (data.name == "ValidationError"){
            $scope.messages = {message: data.errors.question.message}
        }
        else {
            $scope.newQuestion = {};
            index();
            $location.url('/dashboard');
        }
     });
  }
  $scope.logout = function(){
      userFactory.logout();
      $location.url('/index')
  }
  $scope.goback = function(){
    $location.url('/dashboard');
  }
  $scope.showquestion = function(id){
    $location.url('/questions/'+id);
  }
  $scope.answer = function(id){
    $location.url('/answers/'+id);
  }
}]);
