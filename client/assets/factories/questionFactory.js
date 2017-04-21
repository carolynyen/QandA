app.factory('questionFactory', ['$http', function($http){
    var factory = {};
    factory.index = function(callback) {
        $http.get('/questions').then(function(returned_data){
            callback(returned_data.data);
        });
    }
    factory.show = function(id, callback){
        $http.get('/questions/'+id).then(function(returned_data){
            callback(returned_data.data);
        });
    }
  factory.create = function(newquestion, callback) {
      $http.post('/questions', newquestion).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
  }
  factory.addanswer = function(answer, callback){
      $http.put('/addanswer/'+answer._question, {id: answer._id}).then(function(returned_data){
          callback(returned_data.data);
      })
  }
  return factory;
}]);
