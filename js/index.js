define(['angular', "Underscore", 'require', 'angular-route', 'jquery', 'bootstrap'], function(angular, _) {

    var app = angular.module('webapp', ['ngRoute']);

    app.config(['$routeProvider', '$controllerProvider',
        function($routeProvider, $controllerProvider) {
            $routeProvider
                .when('/pageOne', {
                    templateUrl: 'contentPage.html',
                    resolve: {
                        message: function() {
                            return "aaaaaaa";
                        }
                    },
                    controller: 'pageOneController'
                }).when('/pageTwo', {
                    template: '<h1>page Two</h1>',
                }).when('/pageThree', {
                    template: '<h1>page Three</h1>',
                })
                .otherwise({
                    redirectTo: '/pageOne' //angular就喜欢斜杠开头
                });
        }
    ]);

    app.controller('pageOneController', function($rootScope, message) {
        // _.each([1, 2, 3], alert);
        alert(message);
        // alert(_.map([1, 2, 3], function(num) {
        //     return num * 3;
        // }));
    });
    app.run(function($rootScope, $location, $templateCache) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            alert("进入状态改变");
        });
    });
    return app;
});
