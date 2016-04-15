/**
 * Created by Vittorio on 13/04/2016.
 */

angular.module('estudos').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/estudos', {
            templateUrl: '../estudos/views/estudo-test.client.view.html'
        });
    }
]);