angular.module('rogoadmin', ['firebase', 'ui.bootstrap','ui.utils','ui.router', 'wysiwyg.module']);

angular.module('rogoadmin').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('my-partial', {
        url: '',
        templateUrl: 'admin/my-partial.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('');

});

angular.module('rogoadmin').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
