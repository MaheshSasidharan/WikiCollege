//Routes
myApp.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/users/:id/details', {
        templateUrl: '/templates/users/details.html',
        controller: "universityDetails"
      })
      .when('/', {
        templateUrl: '/templates/users/index.html',
        controller: "UserListCtr"
      })
      .otherwise({redirectTo:'/'});
  }
]);