myApp.controller("UniversityDetails", ['Factory_DataService', 'Factory_CommonRoutines', 'SharedProperties', UniversityDetailsCtrl]);

function UniversityDetailsCtrl(DataService, CommonFactory, SharedProperties) {
  var ud = this;
  ud.oUniv = null;
  ud.arrGroups = [];
  ud.arrPosts = null;
  ud.oAddEditPost = null;

  ud.oService = {
    GetUniversityById: function(nId) {
      return DataService.GetUniversityById(nId).then(function(data) {
        return data;
      });
    },
    GetGroupsByUniversityId: function(nId) {
      return DataService.GetGroupsByUniversityId(nId).then(function(data) {
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
    GetGroupsByUniversityId: function(nId) {
      arrGroups.forEach(function(oItem) {
        ud.arrGroups.push(new SharedProperties.Constructor.Group(oItem));
      });
      // return;
      // ud.oService.GetGroupsByUniversityId(nId).then(function(data) {
      //   ud.arrPosts = data.arrPosts;
      // });
    },
    GetPostsByGroupId: function(oGroup) {
      ud.arrPosts = oGroup.GetPostsByGroupId();
      return;
      ud.oService.GetPostsByGroupId(nId).then(function(data) {
        ud.arrPosts = data.arrPosts;
      });
    },
    UpdateUniv: function() {
      console.log(ud.oUniv);
    },
    AddNewPost: function() {
      ud.oAddEditPost = new SharedProperties.Constructor.Post({});
    },
    Init: function() {
      var nId = null;
      nId = CommonFactory.GetByUniversityId();
      if (nId) {
        this.GetUniversityById(nId);
        this.GetGroupsByUniversityId(nId);
      }
      else {
        alert("Incorrect University Id");
      }
    }
  };
  ud.Helper.Init();
}

var arrGroups = [{
  GroupId: 3,
  UnivId: 1,
  Title: "Accommodation",
  CreatedBy: 111,
  CreatedWhen: "07/13/2013",
  NumOfPosts: 5
}, {
  GroupId: 4,
  UnivId: 1,
  Title: "Faculty",
  CreatedBy: 333,
  CreatedWhen: "07/13/2013",
  NumOfPosts: 3
}, {
  GroupId: 1,
  UnivId: 1,
  Title: "Transportation",
  CreatedBy: 222,
  CreatedWhen: "06/10/2015",
  NumOfPosts: 1
}, {
  GroupId: 2,
  UnivId: 1,
  Title: "Weather",
  CreatedBy: 222,
  CreatedWhen: "07/10/2015",
  NumOfPosts: 4
}];

window.arrPosts = [
  [{
    Id: 1,
    Title: "Are there good public transportation services to the University from Coralville?",
    CreatedBy: "Sanders",
    CreatedWhen: "02/19/2016",
    Upvotes: 2,
    UnivId: 1
  }],
  [{
    Id: 3,
    Title: "Hey guys, where is the best place to buy reused books?",
    CreatedBy: "Narnia",
    CreatedWhen: "11/01/2016",
    Upvotes: 3,
    UnivId: 1
  }, {
    Id: 2,
    Title: "I know this has been asked before, but are the winters as bad as it's in GOT?",
    CreatedBy: "Stark",
    CreatedWhen: "04/30/2015",
    Upvotes: 2,
    UnivId: 1
  }, {
    Id: 1,
    Title: "Are there good public transportation services to the University from Coralville?",
    CreatedBy: "Sanders",
    CreatedWhen: "02/19/2016",
    Upvotes: 6,
    UnivId: 1
  }, {
    Id: 4,
    Title: "How cold does it get during winter weather?",
    CreatedBy: "Rebecca",
    CreatedWhen: "08/02/2014",
    Upvotes: 4,
    UnivId: 1
  }],
  [{
    Id: 5,
    Title: "Can someone help me find apartment under $500?",
    CreatedBy: "Raghav",
    CreatedWhen: "12/23/2015",
    Upvotes: 2,
    UnivId: 1
  }, {
    Id: 3,
    Title: "Hey guys, where is the best place to buy reused books?",
    CreatedBy: "Narnia",
    CreatedWhen: "11/01/2016",
    Upvotes: 2,
    UnivId: 1
  }, {
    Id: 2,
    Title: "I know this has been asked before, but are the winters as bad as it's in GOT?",
    CreatedBy: "Stark",
    CreatedWhen: "04/30/2015",
    Upvotes: 2,
    UnivId: 1
  }, {
    Id: 1,
    Title: "Are there good public transportation services to the University from Coralville?",
    CreatedBy: "Sanders",
    CreatedWhen: "02/19/2016",
    Upvotes: 7,
    UnivId: 1
  }, {
    Id: 4,
    Title: "How cold does it get during winter weather?",
    CreatedBy: "Rebecca",
    CreatedWhen: "08/02/2014",
    Upvotes: 4,
    UnivId: 1
  }],
  [{
    Id: 2,
    Title: "I know this has been asked before, but are the winters as bad as it's in GOT?",
    CreatedBy: "Stark",
    CreatedWhen: "04/30/2015",
    Upvotes: 2,
    UnivId: 1
  }, {
    Id: 1,
    Title: "Are there good public transportation services to the University from Coralville?",
    CreatedBy: "Sanders",
    CreatedWhen: "02/19/2016",
    Upvotes: 2,
    UnivId: 1
  }, {
    Id: 4,
    Title: "How cold does it get during winter weather?",
    CreatedBy: "Rebecca",
    CreatedWhen: "08/02/2014",
    Upvotes: 4,
    UnivId: 1
  }]
];
