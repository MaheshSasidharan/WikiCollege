describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Sign Up controller', function() {
    it('Should add user with user details', function() {
      var $scope = {};
      var controller = $controller('SignupCtrl', { $scope: $scope });
      controller.su.oUser = {
        name: 'kaustubh',
        email: 'kaustubh-mungale@uiowa.edu',
        password: 'welcome1'
      }
      controller.Helper.AddUser();
      
      //expect('strong').toEqual('strong');
    });
    
  });
});