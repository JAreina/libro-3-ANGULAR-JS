/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';
angular.module('jareina')
.directive('year', [function() {
    return function(scope, elm, attrs) {
        var year = new Date();
      elm.text(' ' + year.getFullYear());
    };
  }]);