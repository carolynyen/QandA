app.factory('answerFactory', ['$http', function($http){
    var factory = {};
    factory.create = function(newanswer, callback) {
      $http.post('/answers', newanswer).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
    }
    factory.like = function(answerid, callback){
      $http.put('/like/'+answerid).then(function(returned_data){
          callback(returned_data.data)
      })
    }
    return factory;
}]);
