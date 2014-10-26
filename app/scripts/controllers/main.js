'use strict';

/**
 * @ngdoc function
 * @name fdotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fdotApp
 */
angular.module('fdotApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
