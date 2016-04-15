/**
 * Created by Vittorio on 13/04/2016.
 */
angular.module('estudos').factory('EstudosFactory', ['$resource', function($resource) {
    return $resource('/api/estudos/:estudoId', {
        estudoId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);