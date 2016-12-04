/*
//Factory
myApp.factory('Users', ['$resource',function($resource){
  return $resource('/users.json', {},{
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  })
}]);

myApp.factory('User', ['$resource', function($resource){
  return $resource('/users/:id.json', {}, {
    show: { method: 'GET' },
    update: { method: 'PUT', params: {id: '@id'} },
    delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]);
*/
myApp
.factory('Factory_DataService', ['$http', 'Factory_Constants', 'Factory_CommonRoutines', DataService])

function DataService($http, Constants, CommonFactory) {
    var Helper = {
        app: "/",
        University: {
            controller: "university/",
            GetAllUniversities: function (oFilter) {
                return $http.post(Helper.app + Helper.University.controller + 'GetAllUniversities', { oFilter: oFilter })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            TestPost: function (oSaveItem) {
                return $http.post(Helper.app + Helper.University.controller + 'TestPost', { oSaveItem: oSaveItem })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },// Review History
            GetTest1: function (nPersonID) {
                return $http.get(Helper.app + Helper.University.controller + 'testme2?nUnivId=' + nPersonID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetUniversityById: function (nId) {
                return $http.get(Helper.app + Helper.University.controller + 'GetUniversityById?nId=' + nId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetGroupsByUniversityId: function (nId) {
                return $http.get(Helper.app + Helper.University.controller + 'GetGroupsByUniversityId?nId=' + nId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetPostsByGroupId: function (nId) {
                return $http.get(Helper.app + Helper.University.controller + 'GetPostsByGroupId?nId=' + nId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetCommentsByPostId: function (nId) {
                return $http.get(Helper.app + Helper.University.controller + 'GetCommentsByPostId?nId=' + nId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            AddEditGroup: function (oSaveGroup) {
                return $http.post(Helper.app + Helper.University.controller + 'AddEditGroup', { oSaveGroup: oSaveGroup })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            AddEditPost: function (oSavePost) {
                return $http.post(Helper.app + Helper.University.controller + 'AddEditPost', { oSavePost: oSavePost })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            AddEditCommentToPost: function (oSaveComment) {
                return $http.post(Helper.app + Helper.University.controller + 'AddEditCommentToPost', { oSaveComment: oSaveComment })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SearchCity: function (sCity) {
                return $http.get(Helper.app + Helper.University.controller + 'SearchCity?sCity=' + sCity)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
        },
        User:{
            controller: "users/",
            AddUser: function (oSaveItem) {
                return $http.post(Helper.app + Helper.User.controller + 'AddUser', { oSaveItem: oSaveItem })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            Logout: function () {
                return $http.get(Helper.app + Helper.User.controller + 'Logout')
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            LoginUser: function (oLoginItem) {
                return $http.post(Helper.app + Helper.User.controller + 'LoginUser', { oLoginItem: oLoginItem })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
        },
        Miscellaneous: {
            ReturnDataDotData: function (data) {
                return data.data;
            },
            FailedInService: function () {
                CommonFactory.Notification.ShowNotification(true, Constants.Miscellaneous.SomethingWentWrong, Constants.Miscellaneous.Notification.Type.Danger);
            }
        },
        Filter: function(filterData){
            console.log("In get call")
            return $http.get("Intergrate with ruby controller here")
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
        }
    }

    var oService = {
        // Univ
        GetAllUniversities: Helper.University.GetAllUniversities,
        GetUniversityById: Helper.University.GetUniversityById,
        GetGroupsByUniversityId: Helper.University.GetGroupsByUniversityId,
        GetPostsByGroupId: Helper.University.GetPostsByGroupId,
        GetCommentsByPostId: Helper.University.GetCommentsByPostId,
        AddEditGroup: Helper.University.AddEditGroup,
        AddEditPost: Helper.University.AddEditPost,
        AddEditCommentToPost: Helper.University.AddEditCommentToPost,
        
        // User
        AddUser: Helper.User.AddUser,
        Logout: Helper.User.Logout,
        LoginUser: Helper.User.LoginUser,
        
        // Testing part
        GetTest1: Helper.University.GetTest1,
        TestPost: Helper.University.TestPost,
        SearchCity: Helper.University.SearchCity,
        
        //Filter
        filter: Helper.Filter
    }
    return oService;
}