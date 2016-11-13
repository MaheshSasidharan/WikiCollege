myApp.service('SharedProperties', [SharedProp]);

function SharedProp() {
    var oSharedObj = {
        oLogin: {
            sUserName: "",
            sPassword: "",
            bShow: false
        }
    }
    return oSharedObj;
}