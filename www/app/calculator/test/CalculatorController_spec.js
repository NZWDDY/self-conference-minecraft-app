'use strict';

describe('CalculatorController', function() {
    var injected, $scope;

    beforeEach(function(){
       module('calculator.controller');
        inject(function($rootScope, $controller) {
            injected = {
                $rootScope: $rootScope,
                $controller: $controller
            };
            $scope = $rootScope.$new();
        });
    });

    function createController() {
        injected.$controller('CalculatorController', {
            $scope: $scope
        });
    }

    describe('xyz', function() {

        beforeEach(function() {
            $scope.nether = {};
        });

        it('updates 16,5,16 to nether coords 2,5,2', function(){
            createController();
            $scope.overworld = {
                x: 16,
                y: 5,
                z: 16
            };
            var expected = {
                x: 2,
                y: 5,
                z: 2
            };
            $scope.calculate();
            expect($scope.nether).toEqual(expected);
        })

    });

    it('updates 0,0,0 to nether coords 0,0,0', function(){
        createController();
        $scope.overworld = {
            x: 0,
            y: 0,
            z: 0
        };
        $scope.calculate();
        expect($scope.nether).toEqual($scope.overworld);

    })

});
