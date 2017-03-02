  define(['angular','model'], function(angular,app) {
      app.controller('pageOneController', function($scope, message) {
            $scope.message=message;
      });
      return app;
  });
