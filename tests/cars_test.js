'use strict';

describe('app.cars', function () {

    beforeEach(function () {
        module('app.cars');
    });

    describe('Cars service', function () {

        var carsService;

        beforeEach(function () {
            inject(['CarsService', function (service) {
                    carsService = service;
                }
            ]);
        });

        it('should return a list of two cars', function () {
            var cars = carsService.getAll();
            expect(cars).toBeDefined();
            expect(cars.length).toBe(2);
        });
    });


    describe('Cars controller', function () {

        var $scope, CarsService;

        beforeEach(function () {
            module(function ($provide) {
                $provide.value('MockedCarsService', {'getAll': function () {
                        return [];
                    }});
            });
        });

        beforeEach(inject(function ($rootScope) {
            $scope = $rootScope.$new();
        }));

        it('should have a list of cars', inject(function ($controller, MockedCarsService) {
            $controller('CarsController', {'$scope': $scope, 'CarsService': MockedCarsService});
            expect($controller).toBeDefined();
            expect(CarsService);
            expect($scope.cars.length).toBe(MockedCarsService.getAll().length);

        }));

    });

});