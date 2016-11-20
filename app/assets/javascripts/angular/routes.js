//Routes
myApp.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/university', {
        templateUrl: '/templates/users/details.html',
        controller: "UniversityDetails as ud"
      })
      .when('/', {
        templateUrl: '/templates/users/index.html',
        controller: "UniversityCtrl as un"
      })
      .otherwise({redirectTo:'/'});
  }
]);