describe("ngBooleanRadio", function () {
    var $compile;
    var $rootScope;

    beforeEach(angular.mock.module("ngApp"));

    beforeEach(inject(["$compile", "$rootScope", function ($c, $rs) {
        $compile   = $c;
        $rootScope = $rs;
    }]));

    it("should set the view value to string 'true' when the model value is set to boolean 'true'", function () {
        var element = $compile('<input ng-model="myModel" type="radio" ng-boolean-radio />')($rootScope);

        $rootScope.myModel = true;
        $rootScope.$apply();

        expect(element.controller("ngModel").$viewValue).toBe("true");
    });

    it("should set the view value to string 'false' when the model value is set to boolean 'false'", function () {
        var element = $compile('<input ng-model="myModel" type="radio" ng-boolean-radio />')($rootScope);

        $rootScope.myModel = false;
        $rootScope.$apply();

        expect(element.controller("ngModel").$viewValue).toBe("false");
    });

    it("should set the view value to 'undefined' when the model value is neither true nor false", function () {
        var element = $compile('<input ng-model="myModel" type="radio" ng-boolean-radio />')($rootScope);

        $rootScope.myModel = "hello, world!";
        $rootScope.$apply();

        expect(element.controller("ngModel").$viewValue).toBeUndefined();
    });

    it("should set the model value to boolean 'true' when the view value is set to string 'true'", function () {
        var element = $compile('<input ng-model="myModel" type="radio" ng-boolean-radio />')($rootScope);
        var ngModel = element.controller("ngModel");

        ngModel.$setViewValue("true");
        $rootScope.$apply();

        expect(ngModel.$modelValue).toBe(true);
    });

    it("should set the model value to boolean 'false' when the view value is set to string 'false'", function () {
        var element = $compile('<input ng-model="myModel" type="radio" ng-boolean-radio />')($rootScope);
        var ngModel = element.controller("ngModel");

        ngModel.$setViewValue("false");
        $rootScope.$apply();

        expect(ngModel.$modelValue).toBe(false);
    });
});
