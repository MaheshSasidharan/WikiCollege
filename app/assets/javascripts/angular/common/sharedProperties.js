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
                this.GroupId = oItem.GroupId;
                this.UnivId = oItem.UnivId;
                this.Title = oItem.Title;
                this.CreatedBy = oItem.CreatedBy;
                this.CreatedWhen = oItem.CreatedWhen;
                this.NumOfPosts = oItem.NumOfPosts;
                this.arrPosts = [];
                this.GetPostsByGroupId = function() {
                    if(this.arrPosts.length > 0){
                        return this.arrPosts;
                    }
                    var that = this;
                    var arrPosts = window.arrPosts[this.GroupId-1];
                    arrPosts.forEach(function(oItem) {
                        that.arrPosts.push(new oSharedObj.Constructor.Post(oItem));
                    });
                    return that.arrPosts;
                    /*
                    return;
                    ud.oService.GetPostsByGroupId(this.GroupId).then(function(data) {
                        ud.arrPosts = data.arrPosts;
                    });
                    */
                }
            },
            Post: function(oItem) {
                this.Id = oItem.Id;
                this.Title = oItem.Title;
                this.CreatedBy = oItem.CreatedBy;
                this.CreatedWhen = oItem.CreatedWhen;
                this.Upvotes = oItem.Upvotes;
                this.UnivId = oItem.UnivId;
                return this;
            }
        }
    }

    //window.arrPosts = ;


    return oSharedObj;
}
