describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('University Details Controller', function() {
    it('shoudl check if array is returned for universities', function() {
      var $scope = {};
      var controller = $controller('UniversityDetails', { $scope: $scope });
      
    });
    
    it('should check if filters are set properly', function() {
      var $scope = {};
      var controller = $controller('UniversityDetails', { $scope: $scope });
     

      //expect('strong').toEqual('strong');
    });
  });
});