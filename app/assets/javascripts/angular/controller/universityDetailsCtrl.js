myApp.controller("UniversityDetails", ['Factory_DataService', 'Factory_CommonRoutines', 'Factory_Constants', 'SharedProperties', UniversityDetailsCtrl]);

function UniversityDetailsCtrl(DataService, CommonFactory, Constants, SharedProperties) {
  var ud = this;
  ud.oLoginItem = SharedProperties.oLoginItem;

  ud.nUnivId = null;
  ud.oUniv = null;
  ud.arrGroups = [];
  ud.arrPosts = [];
  ud.oGroup = null;
  ud.oPost = null;
  ud.oEditGroup = null;
  ud.oEditPost = null;
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
    AddEditGroup: function(oSaveGroup) {
      return DataService.AddEditGroup(oSaveGroup).then(function(data) {
        return data;
      });
    },
    AddEditPost: function(oSavePost) {
      return DataService.AddEditPost(oSavePost).then(function(data) {
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
      ud.oService.GetGroupsByUniversityId(nId).then(function(data) {
        data.arrGroups.forEach(function(oItem) {
          ud.arrGroups.push(new SharedProperties.Constructor.Group(oItem));
        });
      });
    },
    GetPostsByGroupId: function(oGroup) {
      ud.oGroup = oGroup;
      ud.arrPosts = [];
      ud.oService.GetPostsByGroupId(oGroup.Id).then(function(data) {
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
      ud.oPost = oPost;
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
    },
    AddEditGroup: function($event, sType, oSaveItem) {
      $event.stopPropagation();
      var oItem = null;
      if (sType === 'add') {
        oItem = {
          id: -1,
          groupName: ud.oEditGroup.groupName,
          desc: ud.oEditGroup.Description,
          universityId: ud.nUnivId
        }
      }
      else { // edit
        if (!oSaveItem.Title || oSaveItem.Title.trim() === "" || !oSaveItem.Description || oSaveItem.Description.trim() === "") {
          alert("Incomplete details provided for group. Item not saved");
          return;
        }
        oItem = {
          id: oSaveItem.Id,
          groupName: oSaveItem.Title,
          universityId: oSaveItem.UnivId,
          desc: oSaveItem.Description
        };
      }

      ud.oService.AddEditGroup(oItem).then(function(data) {
        if (data.status) {
          if (sType === 'add') {
            oItem = data.group;
            oItem.name = ud.oLoginItem.name;
            if (!ud.arrGroups) {
              ud.arrGroups = [];
            }
            ud.arrGroups.push(new SharedProperties.Constructor.Group(oItem));
            ud.oEditGroup = null;
          }
        }
        else {
          alert(data.sType)
        }
      });
    },
    AddEditPost: function($event, sType, oSaveItem) {
      $event.stopPropagation();
      var oItem = null;
      if (sType === 'add') {
        oItem = {
          id: -1,
          groupId: ud.oGroup.Id,
          postData: ud.oEditPost.Title,
          like: 0,
          dislike: 0
        }
      }
      else { // edit
        if (!oSaveItem.Title || oSaveItem.Title.trim() === "") {
          alert("Incomplete details provided for group. Item not saved");
          return;
        }
        oItem = {
          id: oSaveItem.Id,
          groupId: oSaveItem.GroupId,
          postData: oSaveItem.Title,
          like: oSaveItem.UpVotes,
          dislike: oSaveItem.DownVotes
        };
      }

      ud.oService.AddEditPost(oItem).then(function(data) {
        if (data.status) {
          if (sType === 'add') {
            oItem = data.post;
            oItem.name = ud.oLoginItem.name;
            if (!ud.arrPosts) {
              ud.arrPosts = [];
            }
            ud.arrPosts.push(new SharedProperties.Constructor.Post(oItem));
            ud.oEditPost = null;
          }
        }
        else {
          alert(data.sType)
        }
      });
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
            oItem = data.comment;
            oItem.name = ud.oLoginItem.name;
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
      ud.nUnivId = CommonFactory.GetByUniversityId();
      if (ud.nUnivId) {
        this.GetUniversityById(ud.nUnivId);
        this.GetGroupsByUniversityId(ud.nUnivId);
      }
      else {
        alert("Incorrect University Id");
      }
    }
  };
  ud.Helper.Init();
}
