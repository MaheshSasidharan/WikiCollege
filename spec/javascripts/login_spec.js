describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $controller;
  var $q;
  var $rootScope;
  var $httpBackend;

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _$httpBackend_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  describe('Login Page Controller', function() {
    it('Should login user correct login information', function() {
      var $scope = {};
      var controller = $controller('LoginCtrl', { $scope: $scope });
      controller.Helper.LoginUser({
          name: 'abcd',
          password: 'wikiadmin123',
          username: 'abcd@wikicollege.com'
      });
      
      expect('strong').toEqual('strong');
    });
    
    it('Should fail login for wrong information', function() {
      var $scope = {};
      var controller = $controller('LoginCtrl', { $scope: $scope });
      controller.Helper.LoginUser({
          name: 'abcd',
          password: '123',
          username: 'abcd@wikicollege.com'
      }); 
      expect('strong').toEqual('strong');
      
      var deferred = $q.defer();
      var promise = deferred.promise;
      var response
      deferred.resolve(123);
      deferred.promise.then(function(data) {
        response = data;
      });
      $httpBackend.whenPOST("/users/LoginUser").respond({ hello: 'World' });
      $rootScope.$apply();
      //spyOn(controller.Helper, 'LoginUser').and.returnValue(deferred.promise);
    })
    
  });
});