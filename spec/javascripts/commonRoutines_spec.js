describe('Wiki college', function() {
  beforeEach(module('myapplication'));

  var $factory;

  beforeEach(inject(function(_Factory_CommonRoutines_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $factory = _Factory_CommonRoutines_;
  }));

  describe('CommonRoutines Controller', function() {
    it('should find object in array of objects', function() {
      var $scope = {};
      var factory = $factory
      //controller.Helper.AddUser();
      var array = [
          {
              name: 'kaustubh'
          },
          {
              name: 'kay'
          }
      ];
      var keyName = 'name';
      var keyVal = 'kaustubh';
      factory.FindItemInArray(array, keyName, keyVal);
      //expect('strong').toEqual('strong');
    });
    
    it('should not find incorrect object in array of objects', function() {
      var $scope = {};
      var factory = $factory
      //controller.Helper.AddUser();
      var array = [
          {
              name: 'kaustubh'
          },
          {
              name: 'kay'
          }
      ];
     
      factory.FindItemInArray(array);
      //expect('strong').toEqual('strong');
    });
    
    it('should return index if return type mentioned', function() {
      var $scope = {};
      var factory = $factory
      //controller.Helper.AddUser();
      var array = [
          {
              name: 'kaustubh'
          },
          {
              name: 'kay'
          }
      ];
      var keyName = 'name';
      var keyVal = 'kaustubh';
      factory.FindItemInArray(array, keyName, keyVal, 'index');
      //expect('strong').toEqual('strong');
    });
    
    it('should return query params from URL', function() {
      var $scope = {};
      var factory = $factory
      window = {
          location: {
              search: "http://www.google.com/1"
          }
      }
      factory.GetQueryVariableValue("")
      //expect('strong').toEqual('strong');
    });
    
    it('should return universityId', function() {
      var $scope = {};
      var factory = $factory
      factory.GetByUniversityId()
      //expect('strong').toEqual('strong');
    });
    
  });
});