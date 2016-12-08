myApp.controller('HomeCtrl', [ 'Factory_CommonRoutines', 'Factory_DataService', 'SharedProperties', HomeCtrl]);

function HomeCtrl(CommonFactory, DataService, SharedProperties) {
    var ho = this;
    ho.oLoginItem = SharedProperties.oLoginItem;

    ho.ShowHideLogin = function() {
        if (ho.oLoginItem.bLoggedIn) {
            DataService.Logout().then(function(data) {
                if (data.status) {
                    ho.oLoginItem.Logout();
                    //CommonFactory.oWindow.location.href = "/#/";
                }
            });
        }
        else {
            ho.oLoginItem.bShow = !ho.oLoginItem.bShow;
        }
    }
    
     ho.oService = {
        GetUserInfo: function() {
            return DataService.GetUserInfo().then(function(data) {
                if(data.currentUser && data.currentUser.email){
                    ho.oLoginItem.Login(data.currentUser);
                }
            });
        }
    }
    
    ho.oService.GetUserInfo();
}
