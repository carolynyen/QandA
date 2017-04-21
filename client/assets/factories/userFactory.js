app.factory('userFactory', ['$http', function($http){
    var factory = {};
    factory.user = {};
    factory.index = function(callback) {
        $http.get('/users').then(function(returned_data){
            callback(returned_data.data, factory.user);
        });
    }
    factory.logout = function(){
        factory.user = {};
    }
  factory.create = function(newUser, callback) {
      $http.post('/users', newUser).then(function(returned_data){
          if (typeof(callback) == 'function'){
              factory.user = returned_data.data;
              callback(returned_data.data);
          }
      });
  }
  return factory;
}]);
