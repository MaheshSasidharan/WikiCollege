myApp.service('SharedProperties', [SharedProp]);

function SharedProp() {
    var oSharedObj = {
        oLogin: {
            sUserName: "",
            bShow: false
        },
        Constructor: {
            Group: function(oItem) {
                this.GroupId = oItem.id;
                this.UnivId = oItem.university_id;
                this.Title = oItem.groupName;
                this.Description = oItem.desc;
                this.CreatedBy = "UserName";oItem.CreatedBy;
                this.CreatedWhen = oItem.created_at;
                this.NumOfPosts = oItem.NumOfPosts;
                this.arrPosts = [];
            },
            Post: function(oItem) {
                this.Id = oItem.id;
                this.Title = oItem.postData;
                this.CreatedBy = "UserName" ;//oItem.CreatedBy;
                this.CreatedWhen = oItem.updated_at;
                this.UpVotes = oItem.like;
                this.GroupId = oItem.group_id;
                this.arrComments = null;
                return this;
            },
            Comments: function(oItem){
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
