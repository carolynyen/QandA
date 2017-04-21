app.controller('userController', ['$scope','userFactory', '$routeParams', '$location', function($scope, userFactory, $routeParams, $location) {
  var index = function () {
      userFactory.index(function(data, user) {
          $scope.users = data;
          $scope.user = user;
          if (Object.keys($scope.user).length === 0 && $scope.user.constructor === Object){
              $location.url('/index');
          }
      })
  }
  index();
  $scope.logout = function(){
      userFactory.logout();
      $location.url('/index')
  }
  $scope.create = function() {
      $scope.messages = {message: ""};
      userFactory.create($scope.newUser, function(data) {
          if (data.name == "ValidationError"){
              $scope.messages = {message: data.errors.name.message}
          }
          else {
              $scope.newUser = {};
              index();
              $location.url('/dashboard');
          }
      });
  }
}]);
