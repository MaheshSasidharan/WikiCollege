myApp
    .factory('Factory_CommonRoutines', ['$timeout', '$location', 'Factory_Constants', CommonRoutines])

function CommonRoutines($timeout, $location, Constants) {
    var oCommonRoutine = {
        FindItemInArray: function(array, keyName, keyVal, returnType) {
            var found = false;
            if (undefined === keyVal || null === keyVal) {
                return null;
            }
            for (var i in array) {
                if (array[i][keyName] == keyVal) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                return null;
            }
            if (returnType === "index") {
                return i;
            }
            else {
                return array[i];
            }
        },
        GetQueryVariableValue: function(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == variable) {
                    return decodeURIComponent(pair[1]);
                }
            }
            console.log('Query variable %s not found', variable);
        },
        GetByUniversityId: function() {
            var nId = null;
            var sHash = window.location.hash;
            if (sHash) {
                var sColl = sHash.split('?')[1];
                if (sColl) {
                    nId = sColl.split('=')[1];
                }
            }
            return nId;
        },
        ConvertDateToString: function(date) {
            return this.LessThan10(date.getMonth() + 1) + '/' + this.LessThan10(date.getDate()) + '/' + date.getFullYear();
        },
        StringifyDateProperties: function(oObject) {
            for (var a in oObject) {
                var tempDate = this.IsDateObject(oObject[a]);
                if (tempDate) { // Dateformat or String format
                    oObject[a] = this.ConvertDateToString(oObject[a]);
                }
            }
            return oObject;
        },
        LessThan10: function(num) {
            return num < 10 ? '0' + num : num;
        },
        Log: function(msg, color) {
            color = color || "black";
            var bgc = "White";
            switch (color) {
                case "success":
                    color = "Green";
                    bgc = "LimeGreen";
                    break;
                case "info":
                    color = "DodgerBlue";
                    bgc = "Turquoise";
                    break;
                case "error":
                    color = "Red";
                    bgc = "Black";
                    break;
                case "start":
                    color = "OliveDrab";
                    bgc = "PaleGreen";
                    break;
                case "warning":
                    color = "Tomato";
                    bgc = "Black";
                    break;
                case "end":
                    color = "Orchid";
                    bgc = "MediumVioletRed";
                    break;
                default:
                    color = color;
            }

            if (typeof msg == "object") {
                console.log(msg);
            }
            else if (typeof color == "object") {
                console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
                console.log(color);
            }
            else {
                console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
            }
        },
        ValidDate: function(sDate) {
            if (!sDate) {
                return false;
            }
            var dDate = new Date(sDate);
            return Object.prototype.toString.call(dDate) === "[object Date]" && !isNaN(dDate.getTime()) ? true : false;
        },
        IsDateObject: function(dDate) {
            return Object.prototype.toString.call(dDate) === "[object Date]" && !isNaN(dDate.getTime()) ? true : false;
        },
        GetCurrentTabOnLoad: function(tabs, oDefaultTab) {
            if ($location.$$url.indexOf("/") >= 0) {
                var sTab = $location.$$url.split("/")[1];
                if (sTab) {
                    if(sTab.indexOf('?') >= 0){
                        sTab = sTab.split('?')[0];
                    }
                    sTab = sTab.toLowerCase();
                }
                else {
                    return oDefaultTab;
                }
                for (var i = 0; i < tabs.length; i++) {
                    if (sTab === tabs[i].link.toLowerCase().split("/")[1]) {
                        return tabs[i];
                    }
                };
                return oDefaultTab;
            }
            else {
                return oDefaultTab;
            }
        },
        TabClass: function(selectedTab, tab) {
            if (selectedTab == tab) {
                return "active";
            }
            else {
                return "";
            }
        },
        LoadingNew: {
            bShow: false,
            bShowSmall: false,
            ShowLoading: function(bShow, sType) {
                if (sType === 's') {
                    this.bShowSmall = bShow;
                }
                else {
                    this.bShow = bShow;
                }
            }
        },
        Loading: {
            loadCount: 0,
            loadingShow: function() {
                var bReturn = this.loadCount === 0 ? true : false;
                this.loadCount++;
                return bReturn;
            },
            loadingHide: function() {
                if (this.loadCount > 0) {
                    this.loadCount--;
                    bShow: false,
                        bShowSmall = false,
                        ShowLoading = function(bShow, sType) {
                            if (sType === 's') {
                                this.bShowSmall = bShow;
                            }
                            else {
                                this.bShow = bShow;
                            }
                            return this.loadCount === 0 ? false : true;
                        }

                }
            }
        },
        Popup: {
            bShow: false,
            sType: null,
            sTitle: null,
            ShowPopup: function(bShow, sType, sTitle) {
                this.bShow = bShow;
                this.sType = sType;
                this.sTitle = sTitle;
            }
        }
    }

    return oCommonRoutine;
}
