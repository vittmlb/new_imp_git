/**
 * Created by Vittorio on 13/04/2016.
 */
angular.module('produtos').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/produtos', {
            templateUrl: '../produtos/views/list-produtos.client.view.html'
        }).when('/produtos/create', {
            templateUrl: '../produtos/views/create-produto.client.view.html'
        }).when('/produtos/:produtoId', {
            templateUrl: '../produtos/views/view-produto.client.view.html'
        }).when('/produtos/:produtoId/edit', {
            templateUrl: '../produtos/views/edit-produto.client.view.html'
        });
}]);