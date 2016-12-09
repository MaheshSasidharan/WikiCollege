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
      console.log(controller.oUser)
      controller.oUser.name = "kaustubh";
      controller.oUser.email = "kmungale@gmail.com";
      controller.oUser.password = "welcome1";
      
      
      controller.Helper.AddUser();
      controller.oService.AddUser(controller.oUser);
      
      //expect('strong').toEqual('strong');
    });
    
  });
});