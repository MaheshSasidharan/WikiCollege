myApp.service('SharedProperties', [SharedProp]);

function SharedProp() {
    var oSharedObj = {
        oLogin: {
            sUserName: "",
            sPassword: "",
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
                this.Upvotes = oItem.like;
                this.GroupId = oItem.group_id;
                return this;
            }
        }
    }

    //window.arrPosts = ;


    return oSharedObj;
}
