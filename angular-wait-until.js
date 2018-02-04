(function (window, angular) {
  'use strict';

  var WaitUntilPromiseModule = window.PollUntil;
  if (!WaitUntilPromiseModule) {
    throw new Error('poll-until-promise library is not available.');
  }

  angular.module('angular.wait-until', [])
    .service('WaitUntil', ['$q', '$timeout', function ($q, $timeout) {
      function angularWaitUntilPromise(options) {
        var mergedOptions = options || {};
        mergedOptions.setTimeout = $timeout;
        mergedOptions.Promise = $q;

        return new WaitUntilPromiseModule(mergedOptions);
      }
      return angularWaitUntilPromise;
    }]);
}(window, angular));
