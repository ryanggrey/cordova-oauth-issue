angular.module('oauth-bug.controllers.touch', [])

.controller('TouchCtrl', ['$timeout', '$ionicPlatform', '$log', '$scope', 'driveService', function ($timeout, $ionicPlatform, $log, $scope, driveService) {
  $ionicPlatform.ready(function () {
    $scope.count = 0;

    $scope.incTap = function (event) {
      $scope.count++;
      $log.debug('Touches', $scope.count);

      driveService.authenticate();
    };

    // stops future gestures
    driveService.authenticate();

    // stops future gestures
    // $timeout(driveService.authenticate);

    // does not stop future gestures
    // $timeout(driveService.authenticate, 5000);
  });
},
]);
