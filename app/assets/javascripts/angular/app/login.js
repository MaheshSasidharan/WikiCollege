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
                    lo.oLoginItem.bLoggedIn = true;
                    lo.oLoginItem.bShow = false;
                }else{
                    // Show login failed message
                }
            });
        }
    }
}