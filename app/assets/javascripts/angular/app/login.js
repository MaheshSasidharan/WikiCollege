myApp.controller('LoginCtrl', ['SharedProperties','Auth', LoginCtrl]);

function LoginCtrl(SharedProperties, Auth) {
    var lo = this;
    lo.oLogin = SharedProperties.oLogin;
    
    lo.TryLogin = function () {
        lo.oLogin.bShow = false;
        console.log(lo.oLogin);
    }
}
