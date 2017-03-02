'use strict';

(function(win) {
    var config = {
        paths: {
            'jquery': 'jquery-1.11.3.min',
            'angular': 'angular.min',
            'angular-route': 'angular-route',
            "bootstrap": 'bootstrap.min',
            "Underscore": "Underscore"
        },
        shim: {
            angular: {
                exports: 'angular'
            },
            'angular-route': {
                deps: ['angular'],
                exports: 'ngRouteModule'
            },
            "bootstrap": {
                deps: ['jquery'],
            },
            "Underscore": {
                exports: '_'
            }
        }
    };

    require.config(config);

    require(['angular', 'index'], function(angular) {
        angular.bootstrap(document, ['webapp']);
        
    });

})(window);
