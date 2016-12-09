var myApp = angular.module('myapplication', ['ngRoute', 'ngResource', 'ngAnimate', 'ngLodash', 'angularjs-dropdown-multiselect', 'ui-notification']);

myApp
    .config(function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 3000,
            startTop: 10,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });
    })