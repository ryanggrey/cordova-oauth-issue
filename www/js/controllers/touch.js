angular.module('inappbrowser-bug.controllers.touch', [])

.controller('TouchCtrl', ['$timeout', '$ionicPlatform', '$log', '$scope', function ($timeout, $ionicPlatform, $log, $scope) {
  $ionicPlatform.ready(function () {
    $scope.count = 0;

    $scope.incTap = function (event) {
      $scope.count++;
      $log.debug('Touches', $scope.count);

      popUp();
    };

    var popUp = function () {
      cordova.InAppBrowser.open('http://google.com', '_blank');
    };

    // stops future gestures
    popUp();

    // stops future gestures
    // $timeout(popUp);

    // does not stop future gestures
    // $timeout(popUp, 5000);
  });
},
]);
