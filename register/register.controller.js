(function () {
  'use strict';
  angular.module('app').controller('RegisterController', RegisterController);

  RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
  function RegisterController(UserService, $location, $rootScope, FlashService) {
    var me = this;
    me.register = register;
    function register() {
      me.dataLoading = true;
      UserService.Create(me.user).then(function (response) {
        if (response.success) {
          FlashService.Success('Registration successful', true);
          $location.path('/login');
        } else {
          FlashService.Error(response.message);
          me.dataLoading = false;
        }
      });
    }
  }
})();
