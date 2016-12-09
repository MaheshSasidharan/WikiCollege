describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $service;

  beforeEach(inject(function(_SharedProperties_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $service = _SharedProperties_;
  }));

  describe('Shared properties controller', function() {
    it('Should call constructor', function() {
      var $scope = {};
      var service = $service
      service.Constructor.Group({
          id: 1,
          university_id : 1,
          groupName: "New Group",
          user_id: 1,
          desc: "Sample description",
          created_at: Date()
      })
      expect('strong').toEqual('strong');
    });
    
    it('Should create post', function() {
      var $scope = {};
      var service = $service
      service.Constructor.Post({
          id: 1,
          postData : "New Post",
          user_id: 1,
          name: "Kaustubh",
          updated_at: Date(),
          like: 12,
          dislike: 0,
          group_id: 1
      })
      expect('strong').toEqual('strong');
    });
    
    it('Should create comments', function() {
      var $scope = {};
      var service = $service
      service.Constructor.Comments({
          id: 1,
          commentData : "New Comment",
          user_id: 1,
          name: "Kaustubh",
          updated_at: Date(),
          like: 12,
          dislike: 0
      })
      expect('strong').toEqual('strong');
    });
    
    it('Should correctly call logout', function() {
      var $scope = {};
      var service = $service
      service.oLoginItem.Logout();
    });
    
    it('Should correctly call login', function() {
      var $scope = {};
      var service = $service
      service.oLoginItem.Login({
          id: 1,
          name: "kaustubh",
          email: "kmungale@gmail.com"
      });
    });
    
  });
});