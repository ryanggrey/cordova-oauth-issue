
angular.module('inappbrowser-bug',
[
  'ionic',
  'inappbrowser-bug.controllers.touch',
])

.run(['$ionicPlatform', function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
},
]);
