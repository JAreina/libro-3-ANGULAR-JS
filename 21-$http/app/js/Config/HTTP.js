/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';
angular.module('jareina')
    .config(['$httpProvider', function($httpProvider) {

        /**
         * Configure the $httpProvider here
         */

$httpProvider.defaults.headers.common.CSRF_TOKEN = "a2d10a3211b415832791a6bc6";


        // Push the Request and Response Interceptor here
        // $httpProvider.interceptors.push('RequestInterceptor');
        // $httpProvider.interceptors.push('ResponseInterceptor');
    }])
