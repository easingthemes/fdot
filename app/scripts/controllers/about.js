'use strict';

/**
 * @ngdoc function
 * @name fdotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fdotApp
 */
angular.module('fdotApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
