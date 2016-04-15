/**
 * Created by Vittorio on 13/04/2016.
 */
angular.module('estudos').controller('EstudosController', ['$scope', '$routeParams', '$location', 'Produtos', 'EstudosFactory',
    function($scope, $routeParams, $location, Produtos, EstudosFactory) {
        $scope.create = function() {
            var estudo = new EstudosFactory({
                nomeEstudo: this.nomeEstudo,
                total: this.total
            });
            estudo.$save(function (response) {
                $location.path('estudos/' + response._id);
            }, function (errorResponse) {
                $scope.estudoError = errorResponse.data.message;
            });
        };
        $scope.find = function() {
            $scope.produtos = Produtos.query();
            $scope.estudos = EstudosFactory.query();
        };
    }
]);