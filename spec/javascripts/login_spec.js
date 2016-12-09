describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
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
      
      //expect('strong').toEqual('strong');
    });
    
    it('Should fail login for wrong information', function() {
      var $scope = {};
      var controller = $controller('LoginCtrl', { $scope: $scope });
      controller.Helper.LoginUser({
          name: 'abcd',
          password: '123',
          username: 'abcd@wikicollege.com'
      });     
    })
    
  });
});