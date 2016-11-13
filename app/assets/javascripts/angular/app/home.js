/*
myApp.controller('HomeCtrl', ['Factory_Constants', 'Factory_DataService', 'Factory_CommonRoutines', HomeCtrl]);

function HomeCtrl(Constants, DataService, CommonFactory) {
    var ho = this;
}
*/
myApp.controller('HomeCtrl', ['SharedProperties', HomeCtrl]);

function HomeCtrl(SharedProperties) {
    var ho = this;
    ho.ShowHideLogin = function(){
        SharedProperties.oLogin.bShow = true;
    }
}