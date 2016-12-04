myApp.controller("SignupCtrl", ['Factory_DataService', 'Factory_CommonRoutines', SignupCtrl]);

function SignupCtrl(DataService, CommonFactory) {
    var su = this;

    su.oUser = {
        name: null,
        email: null,
        password: null
    }

    su.oService = {
        AddUser: function(oSaveItem) {
            return DataService.AddUser(oSaveItem).then(function(data) {
                return data;
            });
        }
    }

    su.Helper = {
        AddUser: function() {
            // Validations
            su.oService.AddUser(su.oUser).then(function(data) {
                console.log(data);
                if (data.status) {
                    lo.oLoginItem.bLoggedIn = true;
                }
            });
        }
    }
}
