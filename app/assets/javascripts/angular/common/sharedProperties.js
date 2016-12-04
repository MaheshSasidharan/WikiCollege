myApp.service('SharedProperties', [SharedProp]);

function SharedProp() {
    var oSharedObj = {
        oLoginItem: {
            email: null,
            password: null,
            bShow: false,
            bLoggedIn: false
        },
        Constructor: {
            Group: function(oItem) {
                this.Id = oItem.id;
                this.UnivId = oItem.university_id;
                this.Title = oItem.groupName;
                this.Description = oItem.desc;
                this.CreatedBy = "UserName";
                this.CreatedWhen = oItem.created_at;
                this.arrPosts = [];
            },
            Post: function(oItem) {
                this.Id = oItem.id;
                this.Title = oItem.postData;
                this.CreatedBy = "UserName";
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
                this.CreatedBy = oItem.user;
                this.CreatedWhen = oItem.timestamps;
                this.UpVotes = oItem.like;
                this.DownVotes = oItem.dislike;
                return this;
            }
        }
    }

    return oSharedObj;
}
