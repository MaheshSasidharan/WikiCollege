myApp.controller('LoginCtrl', ['Factory_DataService', 'SharedProperties', LoginCtrl]);

function LoginCtrl(DataService, SharedProperties) {
    var lo = this;
    lo.oLoginItem = SharedProperties.oLoginItem;
    
    lo.oService = {
        LoginUser: function(oLoginItem) {
            return DataService.LoginUser(oLoginItem).then(function(data) {
                return data;
            });
        }
    }

    lo.Helper = {
        LoginUser: function() {
            // Validations for lo.oLoginItem
            lo.oService.LoginUser(lo.oLoginItem).then(function(data) {
                if (data.status) {
                    if(data.currentUser && data.currentUser.email){
                        lo.oLoginItem.Login(data.currentUser);
                    }else{
                        alert("Login was successful. But could not retrieve user info.");
                    }
                    
                }else{
                    // Show login failed message
                    SharedProperties.CommonFactory.Notification.error("Incorrect login.");
                }
            });
        }
    }
}