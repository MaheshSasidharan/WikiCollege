describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('University Controller', function() {
    it('shoudl check if array is returned for universities', function() {
      var $scope = {};
      var controller = $controller('UniversityCtrl', { $scope: $scope });
      controller.Helper.GetAllUniversities();
      //expect('strong').toEqual('strong');
    });
    
    it('should check if filters are set properly', function() {
      var $scope = {};
      var controller = $controller('UniversityCtrl', { $scope: $scope });
      controller.ApplyFilters();
      controller.Search();
      controller.TestPost();
      controller.test2();
      
      controller.deleteUser();

      //expect('strong').toEqual('strong');
    });
  });
});