/*
myApp.controller('LoginCtrl', ['Factory_Constants', 'Factory_DataService', 'Factory_CommonRoutines', LoginCtrl]);

function LoginCtrl(Constants, DataService, CommonFactory) {
    var lo = this;
    lo.oLogin = {
        sUserName: "",
        sPassword: ""
    }
}
*/
myApp.controller('LoginCtrl', ['SharedProperties', LoginCtrl]);

function LoginCtrl(SharedProperties) {
    var lo = this;
    lo.oLogin = SharedProperties.oLogin;
    
    lo.TryLogin = function () {
        lo.oLogin.bShow = false;
        console.log(lo.oLogin);
    }
}