/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

(function() {
    'use strict';
    angular
        .module('app.header')
        .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$rootScope', '$scope', '$state', 'HeaderService', 'Utils'];
    function HeaderController($rootScope, $scope, $state, HeaderService,  Utils) {
        var vm = this;
        vm.address = {};
        vm.multipleDemo = {};
        vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];

        activate();

        function activate() {

            HeaderService.ikea().then((data) => {
                vm.ikea = data.data;
                console.log(vm.ikea)
            });
        }
    }

})();
