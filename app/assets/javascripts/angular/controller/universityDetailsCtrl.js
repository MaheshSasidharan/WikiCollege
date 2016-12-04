myApp.controller("UniversityDetails", ['Factory_DataService', 'Factory_CommonRoutines', 'Factory_Constants', 'SharedProperties', UniversityDetailsCtrl]);

function UniversityDetailsCtrl(DataService, CommonFactory, Constants, SharedProperties) {
  var ud = this;
  ud.oUniv = null;
  ud.arrGroups = [];
  ud.arrPosts = [];
  ud.oPost = null;
  ud.oAddEditPost = null;
  ud.tabs = Constants.University.Tabs;
  ud.selectedTab = null;
  ud.sComment = null;

  ud.Popup = {
    bShow: false,
    sType: null,
    sTitle: null,
    sDisplayMessage: null,
    ShowPopup: function(bShow, sType, sTitle, sDisplayMessage) {
      this.bShow = bShow;
      this.sType = sType;
      this.sTitle = sTitle;
      this.sDisplayMessage = sDisplayMessage;
    }
  };

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
    },
    GetPostsByGroupId: function(nId) {
      return DataService.GetPostsByGroupId(nId).then(function(data) {
        return data;
      });
    },
    GetCommentsByPostId: function(nId) {
      return DataService.GetCommentsByPostId(nId).then(function(data) {
        return data;
      });
    },
    AddEditCommentToPost: function(oSaveComment) {
      return DataService.AddEditCommentToPost(oSaveComment).then(function(data) {
        return data;
      });
    },
  }

  ud.Helper = {
    GetCurrentTabOnLoad: CommonFactory.GetCurrentTabOnLoad,
    TabClass: CommonFactory.TabClass,
    SetSelectedTab: function(tab) {
      ud.selectedTab = tab;
    },
    GetUniversityById: function(nId) {
      ud.oService.GetUniversityById(nId).then(function(data) {
        ud.oUniv = data.oUniv;
      });
    },
    GetGroupsByUniversityId: function(nId) {
      // arrGroups.forEach(function(oItem) {
      //   ud.arrGroups.push(new SharedProperties.Constructor.Group(oItem));
      // });
      // return;
      ud.oService.GetGroupsByUniversityId(nId).then(function(data) {
        data.arrGroups.forEach(function(oItem) {
          ud.arrGroups.push(new SharedProperties.Constructor.Group(oItem));
        });
      });
    },
    GetPostsByGroupId: function(oGroup) {
      // oGroup.GetPostsByGroupId().then(function(arrPosts){
      //   ud.arrPosts = arrPosts;
      // });
      //return;
      //
      ud.arrPosts = [];
      ud.oService.GetPostsByGroupId(oGroup.GroupId).then(function(data) {
        //ud.arrPosts = data.arrPosts;
        if (data.arrPosts.length) {
          data.arrPosts.forEach(function(oItem) {
            ud.arrPosts.push(new SharedProperties.Constructor.Post(oItem));
          });
        }
        else {
          ud.arrPosts = null;
        }
      });
    },
    GetCommentsByPostId: function(oPost) {
      if (oPost.arrComments === null) {
        //oPost.arrComments = [];
        ud.oPost = oPost;
        /*
        arrComments.forEach(function(oItem) {
          oPost.arrComments.push(new SharedProperties.Constructor.Comments(oItem));
        });
        */
        //oPost.arrComments = arrComments;
        ud.oService.GetCommentsByPostId(oPost.Id).then(function(data) {
          if (data.status) {
            ud.Popup.ShowPopup(true, "comments", Constants.University.Popup.CommentTitle);
            //ud.arrPosts = data.arrPosts;
            if (data.arrComments.length) {
              ud.oPost.arrComments = [];
              data.arrComments.forEach(function(oItem) {
                ud.oPost.arrComments.push(new SharedProperties.Constructor.Comments(oItem));
              });
            }
          }
        });
      }
    },
    AddEditCommentToPost: function(sType, oSaveItem) {
      var oItem = null;
      if (sType === 'add') {
        oItem = {
          id: -1,
          commentData: ud.sComment,
          postId: ud.oPost.Id,
          like: 0,
          dislike: 0
        }
      }
      else { // edit
        oItem = {
          id: oSaveItem.Id,
          commentData: oSaveItem.Comment,
          postId: ud.oPost.Id,
          like: oSaveItem.UpVotes,
          dislike: oSaveItem.DownVotes
        };
      }

      ud.oService.AddEditCommentToPost(oItem).then(function(data) {
        if (data.status) {
          if (sType === 'add') {
            if (!ud.oPost.arrComments) {
              ud.oPost.arrComments = [];
            }
            ud.oPost.arrComments.push(new SharedProperties.Constructor.Comments(oItem));
            ud.sComment = null;
          }
        }
        else {
          alert(data.sType)
        }
      });
    },
    UpdateUniv: function() {
      console.log(ud.oUniv);
    },
    AddNewPost: function() {
      ud.oAddEditPost = new SharedProperties.Constructor.Post({});
    },
    Init: function() {
      ud.selectedTab = this.GetCurrentTabOnLoad(ud.tabs, ud.tabs[0]);
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


var arrComments = [{
  id: 1,
  commentData: "Hi this is test comments",
  user: "User 1",
  timestamps: new Date(),
  like: 4,
  dislike: 2
}, {
  id: 2,
  commentData: "How is it going?",
  user: "User 2",
  timestamps: new Date(),
  like: 7,
  dislike: 0
}, {
  id: 3,
  commentData: "This comment does not make any sense.",
  user: "User 3",
  timestamps: new Date(),
  like: 2,
  dislike: 5
}]
