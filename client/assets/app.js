var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/index', {
        templateUrl:'/partials/login.html',
        controller: 'userController',
        title: 'HOME'
    })
    .when('/dashboard', {
        templateUrl:'/partials/dashboard.html',
        controller: 'questionController',
        title: 'Home'
    })
    .when('/newquestion', {
        templateUrl:'/partials/newquestion.html',
        controller: 'questionController',
        title: 'Add a Question'
    })
    .when('/answers/:id', {
        templateUrl:'/partials/newanswer.html',
        controller: 'answerController',
        title: 'Answer the Question'
    })
    .when('/questions/:id', {
        templateUrl:'/partials/question.html',
        controller: 'answerController',
        title: 'Q&A'
    })
    .otherwise({
      redirectTo: '/index'
    });
});

app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);
