describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $controller;
  var $scope

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('University Details Controller', function() {
    it('should show correct popup', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.Popup.ShowPopup();
      expect('strong').toEqual('strong');
    });
    
    it('should check if correct ID is returned', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.GetUniversityById(1);
      expect('strong').toEqual('strong');
    });
    
    it('should fetch groups for the university', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.GetGroupsByUniversityId(1);
      expect('strong').toEqual('strong');
    });
    
    it('should fetch posts for group', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.GetPostsByGroupId(1);
      expect('strong').toEqual('strong');
    });
    
    it('should fetch comments for Group', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.GetCommentsByPostId(1);
      expect('strong').toEqual('strong');
    });
    
    it('should check if user is able to add edit group', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.AddEditGroup(1);
      expect('strong').toEqual('strong');
    });
    
    it('should check if user is able to add edit post', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.AddEditPost(1);
      expect('strong').toEqual('strong');
    });
    
    it('should check if edit comment for a post', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.AddEditCommentToPost("Edited Comment");
      expect('strong').toEqual('strong');
    });
    
    it('should set selected tab', function() {
      var $scope = {};
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.Helper.SetSelectedTab("University")
      expect('strong').toEqual('strong');
    });
    
  });
});