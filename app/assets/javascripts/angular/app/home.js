myApp.controller('HomeCtrl', ['SharedProperties', HomeCtrl]);

function HomeCtrl(SharedProperties) {
    var ho = this;
    ho.ShowHideLogin = function(){
        SharedProperties.oLoginItem.bShow = !SharedProperties.oLoginItem.bShow;
    }
}