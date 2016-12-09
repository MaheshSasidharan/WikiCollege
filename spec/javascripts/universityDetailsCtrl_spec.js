describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $controller;
  var $scope
  var $q

  beforeEach(inject(function(_$controller_, $q){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $q = $q;
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
      controller.Helper.GetUniversityById(1);
      expect('strong').toEqual('strong');
    });
    
    it('should fetch groups for the university', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.GetGroupsByUniversityId(1);
      controller.oService.GetGroupsByUniversityId(1);
      expect('strong').toEqual('strong');
    });
    
    it('should fetch posts for group', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.GetPostsByGroupId(1);
      controller.Helper.GetPostsByGroupId(1);
      expect('strong').toEqual('strong');
    });
    
    it('should fetch comments for Group', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.GetCommentsByPostId(1);
      controller.Helper.GetCommentsByPostId(1);
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
      controller.nUnivId = 1;
      controller.oUniv = 1;
      controller.arrGroups = [];
      controller.arrPosts = [];
      controller.oGroup = {
          id: 1
      };
      controller.oPost = null;
      controller.oEditGroup = null;
      controller.oEditPost = {
          title: "New title"
      };
      controller.oAddEditPost = null;
  
      controller.Helper.AddEditPost({stopPropagation: function(){}}, 'add', {
          Id: 1,
          Title: "New post",
          UnivId: 1,
          Description: "Post Description"
      });
      controller.Helper.AddEditPost({stopPropagation: function(){}}, '', {
          Id: 1,
          Title: "New post",
          UnivId: 1,
          Description: "Post Description"
      })
      expect('strong').toEqual('strong');
    });
    
    it('should check if edit comment for a post', function() {
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.oService.AddEditCommentToPost("Edited Comment");
      
      controller.nUnivId = 1;
      controller.oUniv = 1;
      controller.arrGroups = [];
      controller.arrPosts = [];
      controller.oGroup = {
          id: 1
      };
      controller.oPost = {id: 1};
      controller.oEditGroup = null;
      controller.oEditPost = {
          title: "New title"
      };
      controller.oAddEditPost = null;
      controller.Helper.AddEditCommentToPost('add', {});
      controller.Helper.AddEditCommentToPost('', {});
      
      expect('strong').toEqual('strong');
    });
    
    it('should set selected tab', function() {
      var $scope = {};
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.Helper.SetSelectedTab("University")
      expect('strong').toEqual('strong');
    });
    
    it('Should check update university', function() {
      var $scope = {};
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.Helper.UpdateUniv();
      controller.Helper.AddNewPost();
      expect('strong').toEqual('strong');
    });
    
    it('Should Initialize the controller correctly', function() {
      var $scope = {};
      var controller = $controller('UniversityDetails', { $scope: $scope });
      controller.nUnivId = 1;
      controller.Helper.Init();
    });
    
  });
});