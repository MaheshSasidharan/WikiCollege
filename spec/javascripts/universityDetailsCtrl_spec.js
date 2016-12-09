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
      controller.Helper.Init();
      controller.Helper.SetSelectedTab();
      controller.Helper.GetUniversityById(1);
      controller.Helper.GetGroupsByUniversityId(1);
      controller.Helper.GetPostsByGroupId(1);
      controller.Helper.GetCommentsByPostId(1);
      controller.Helper.AddEditGroup({}, 'add', {
          id: 1,
          groupName: "New Group Name",
          universityId: 1,
          desc: "group description"
        });
      controller.Helper.AddEditGroup({stopPropagation: function(){}}, 'edit', {
          id: 1,
          groupName: "New Group Name",
          universityId: 1,
          desc: "group description"
        });
      //expect('strong').toEqual('strong');
    });
    
    it('should check if filters are set properly', function() {
      var $scope = {};
      var controller = $controller('UniversityDetails', { $scope: $scope });
     

      //expect('strong').toEqual('strong');
    });
  });
});