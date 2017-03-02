define(['angular', "Underscore",'model', 'require', 'angular-route', 'jquery', 'bootstrap','pageOneController'], function(angular, _,app) {


    app.config(['$routeProvider', '$controllerProvider',
        function($routeProvider, $controllerProvider) {
            $routeProvider
                .when('/pageOne', {
                    templateUrl: 'contentPage.html',
                    resolve: {
                        message: function() {
                            return "resolve传递的值";
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

    app.run(function($rootScope, $location, $templateCache) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            
        });
    });
    return app;
});
