'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.mytodoApp = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
