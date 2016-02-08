
angular.module('oauth-bug.services.driveService', [])

  .factory('driveService', ['$log', '$cordovaOauth', function ($log, $cordovaOauth) {

    return {

      authenticate: function () {
        $log.debug('Authenticating');
        return $cordovaOauth.google('', []);
      },

    };
  },
]);
