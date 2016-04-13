/**
 * Created by Vittorio on 13/04/2016.
 */

mainAppModuleName = 'impApp';

mainAppModule = angular.module(mainAppModuleName, ['ngResource', 'ngRoute', 'produtos']);

mainAppModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

if(window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function () {
    angular.bootstrap(document, [mainAppModuleName]);
});