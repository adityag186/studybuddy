(function() {
    'use strict';
    angular.module('app').controller('LoginController', LoginController);
    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var me = this;
        me.login = login;
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
        function login() {
            me.dataLoading = true;
            AuthenticationService.Login(me.username, me.password, function(response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(me.username, me.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    me.dataLoading = false;
                }
            });
        }
    }
})();
