myApp.service('SharedProperties', ['Factory_CommonRoutines', SharedProp]);

function SharedProp(CommonFactory) {
    var oSharedObj = {
        CommonFactory: CommonFactory,
        oLoginItem: {
            id: null,
            name: null,
            email: null,
            password: null,
            bShow: false,
            bLoggedIn: false,
            Logout: function() {
                oSharedObj.CommonFactory.Notification.warning("Bye " + this.name);
                this.id = null;
                this.bLoggedIn = false;
                this.email = null;
                this.name = null;
                this.password = null;
                this.bShow = false;
            },
            Login: function(oItem) {
                this.id = oItem.id;
                this.bLoggedIn = true;
                this.email = oItem.email;
                this.name = oItem.name;
                this.bShow = false;
                oSharedObj.CommonFactory.Notification.info("Welcome to WikiCollege, " + oItem.name);
            }
        },
        Constructor: {
            Group: function(oItem) {
                this.Id = oItem.id;
                this.UnivId = oItem.university_id;
                this.Title = oItem.groupName;
                this.UserId = oItem.user_id;
                this.Description = oItem.desc;
                this.CreatedBy = "UserName";
                this.CreatedWhen = oItem.created_at;
                this.arrPosts = [];
            },
            Post: function(oItem) {
                this.Id = oItem.id;
                this.Title = oItem.postData;
                this.UserId = oItem.user_id;
                this.CreatedBy = oItem.name;
                this.CreatedWhen = oItem.updated_at;
                this.UpVotes = oItem.like;
                this.DownVotes = oItem.dislike;
                this.GroupId = oItem.group_id;
                this.arrComments = null;
                return this;
            },
            Comments: function(oItem) {
                this.Id = oItem.id;
                this.Comment = oItem.commentData;
                this.UserId = oItem.user_id;
                this.CreatedBy = oItem.name;
                this.CreatedWhen = oItem.updated_at;
                this.UpVotes = oItem.like;
                this.DownVotes = oItem.dislike;
                return this;
            }
        }
    }

    return oSharedObj;
}
