myApp.controller("UniversityDetails", ['Factory_DataService', 'Factory_CommonRoutines', UniversityDetailsCtrl]);

function UniversityDetailsCtrl(DataService, CommonFactory) {
  var ud = this;

  ud.oService = {
    GetUniversityById: function(nId) {
      return DataService.GetUniversityById(nId).then(function(data) {
        return data;
      });
    }
  }

  ud.Helper = {
    GetUniversityById: function(nId) {
      ud.oService.GetUniversityById(nId).then(function(data) {
        ud.oUniv = data.oUniv;
      });
    },
    Init: function() {
      var nId = null;
      nId = CommonFactory.GetByUniversityId();
      if (nId) {
        this.GetUniversityById(nId);
      }
      else {
        alert("Incorrect University Id");
      }
    }
  };
  ud.Helper.Init();
}
