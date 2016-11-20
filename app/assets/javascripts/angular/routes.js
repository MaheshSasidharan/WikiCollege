//Routes
myApp.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/users/index.html',
        controller: "UniversityCtrl as un"
      })
      .when('/university', {
        templateUrl: '/templates/users/details.html',
        controller: "UniversityDetails as ud"
      })
      .when('/signup', {
        templateUrl: '/templates/login/signup.html',
        controller: "SignupCtrl as su"
      })
      
      .otherwise({redirectTo:'/'});
  }
]);