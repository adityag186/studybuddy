(function () {
  'use strict';
  angular.module('app').controller('RegisterController', RegisterController);

  RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];

  $scope.bello = {
    "Course Name": ["CNIT150", "CNIT180"]
  };

  $scope.items = [
    'The first choice!',
    'And another choice for you',
    'but wait! A third!'
  ];

  function RegisterController(UserService, $location, $rootScope, FlashService) {
    var me = this;
    me.register = register;
    function register() {
      UserService.Create(me.user).then(function (response) {
        if (response.success) {
          FlashService.Success('Registration successful', true);
          $location.path('/login');
        } else {
          FlashService.Error(response.message);
        }
      });
    }
  }
})();
