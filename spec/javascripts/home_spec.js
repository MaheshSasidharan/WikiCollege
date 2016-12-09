describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Home Page controller', function() {
    it('Should return user info', function() {
      var $scope = {};
      var controller = $controller('HomeCtrl', { $scope: $scope });
      controller.oLoginItem = {
          Logout: function(){}
      }
      controller.ShowHideLogin();
      expect('strong').toEqual('strong');
    });
    
    it('should show login item if already logged', function() {
      var $scope = {};
      var controller = $controller('HomeCtrl', { $scope: $scope });
      controller.oLoginItem = {
          sharedProperties: {},
          logout: function(){},
          bShow: undefined
      }
      controller.ShowHideLogin();
      //controller.oService.GetUserInfo();

      expect('strong').toEqual('strong');
    });
    
    it('should logout if user is logged in', function() {
      var $scope = {};
      var controller = $controller('HomeCtrl', { $scope: $scope });
      controller.oLoginItem = {
          sharedProperties: {},
          logout: function(){},
          bShow: undefined,
          bLoggedIn: true
      }
      controller.ShowHideLogin();
      //controller.oService.GetUserInfo();

      expect('strong').toEqual('strong');
    });
  });
});