(function() {
    'use strict';

    angular
        .module('app.header')
        .service('HeaderService', HeaderService);

    HeaderService.$inject = ['$http'];
    function HeaderService($http) {
        this.ikea = getIkea;
        function getIkea() {
            var ikeaJson = 'server/people.json';
             return $http.get(ikeaJson).success(function(response) {
                return response.data;
            });
        }
        // this.getMenu = getMenu;
        //
        // ////////////////
        //
        // function getMenu(onReady, onError) {
        //   var menuJson = 'server/header-menu.json',
        //       menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
        //
        //   onError = onError || function() { alert('Failure loading menu'); };
        //
        //   $http
        //     .get(menuURL)
        //     .success(onReady)
        //     .error(onError);
        // }
    }
})();