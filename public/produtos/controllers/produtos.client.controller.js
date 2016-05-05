/**
 * Created by Vittorio on 13/04/2016.
 */
angular.module('produtos').controller('ProdutosController', ['$scope', '$routeParams', '$location', 'Produtos',
    function($scope, $routeParams, $location, Produtos) {
        $scope.create = function() {
            var produto = new Produtos({
                nome: this.nome,
                modelo: this.modelo,
                descricao: this.descricao,
                preco_usd: this.preco_usd
            });
            produto.$save(function (response) {
                $location.path('produtos/' + response._id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        $scope.find = function() {
            $scope.produtos = Produtos.query();
        };
        $scope.findOne = function() {
            $scope.produto = Produtos.get({
                produtoId: $routeParams.produtoId
            });
        };
        $scope.update = function() {
            $scope.produto.$update(function () {
                $location.path('produtos/' + $scope.produto._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
                console.log(`Error update: ${errorResponse.data.message}`);
            });
        };
        $scope.delete = function(produto) {
            if(produto) {
                produto.$remove(function () {
                    for(var i in $scope.produtos) {
                        if($scope.produtos[i] === produto) {
                            $scope.produtos.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.produto.$remove(function () {
                    $location.path('produtos');
                });
            }
        };
    }
]);