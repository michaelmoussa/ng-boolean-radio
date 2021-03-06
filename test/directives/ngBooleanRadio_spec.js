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

    it("should not check either radio input by default if model value is undefined", function () {
        var element = $compile('<div>' +
                                    '<input ng-model="myModel" type="radio" value="true" ng-boolean-radio />' +
                                    '<input ng-model="myModel" type="radio" value="false" ng-boolean-radio />' +
                               '</div>')($rootScope);

        expect(element.find('input').eq(0).prop('checked')).toBe(false);
        expect(element.find('input').eq(1).prop('checked')).toBe(false);
    });

    it("should check the string 'true' input by default if model value is true", function () {
        var element = $compile('<div>' +
                                    '<input ng-model="myModel" type="radio" value="true" ng-boolean-radio />' +
                                    '<input ng-model="myModel" type="radio" value="false" ng-boolean-radio />' +
                               '</div>')($rootScope);

        $rootScope.myModel = true;
        $rootScope.$apply();

        expect(element.find('input').eq(0).prop('checked')).toBe(true);
        expect(element.find('input').eq(1).prop('checked')).toBe(false);
    });

    it("should check the string 'false' input by default if model value is false", function () {
        var element = $compile('<div>' +
                                    '<input ng-model="myModel" type="radio" value="true" ng-boolean-radio />' +
                                    '<input ng-model="myModel" type="radio" value="false" ng-boolean-radio />' +
                               '</div>')($rootScope);

        $rootScope.myModel = false;
        $rootScope.$apply();

        expect(element.find('input').eq(0).prop('checked')).toBe(false);
        expect(element.find('input').eq(1).prop('checked')).toBe(true);
    });

    it("should flag the form as invalid if no option is checked", function () {
        var element = $compile('<form name="myForm">' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="true" ng-required="true" ng-boolean-radio />' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="false" ng-required="true" ng-boolean-radio />' +
                               '</form>')($rootScope);
        $rootScope.$apply();

        expect($rootScope.myForm.$invalid).toBe(true);
        expect($rootScope.myForm.$error.required.length).toBe(2);
        expect($rootScope.myForm.$error.required).toEqual([
            element.find('input').eq(0).controller("ngModel"),
            element.find('input').eq(1).controller("ngModel")
        ]);
    });

    it("should validate the form if the string 'true' value is selected from the view", function () {
        var element = $compile('<form name="myForm">' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="true" ng-required="true" ng-boolean-radio />' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="false" ng-required="true" ng-boolean-radio />' +
                               '</form>')($rootScope);
        $rootScope.$apply();

        element.find('input').eq(0).controller("ngModel").$setViewValue("true");
        $rootScope.$apply();

        expect($rootScope.myForm.$valid).toBe(true);
    });

    it("should validate the form if the string 'false' value is selected form the view", function () {
        var element = $compile('<form name="myForm">' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="true" ng-required="true" ng-boolean-radio />' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="false" ng-required="true" ng-boolean-radio />' +
                               '</form>')($rootScope);

        $rootScope.$apply();

        element.find('input').eq(0).controller("ngModel").$setViewValue("false");
        $rootScope.$apply();

        expect($rootScope.myForm.$valid).toBe(true);
    });

    it("should validate the form if the model value is set to boolean 'true'", function () {
        var element = $compile('<form name="myForm">' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="true" ng-required="true" ng-boolean-radio />' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="false" ng-required="true" ng-boolean-radio />' +
                               '</form>')($rootScope);
        $rootScope.$apply();

        $rootScope.myModel = true;
        $rootScope.$apply();

        expect($rootScope.myForm.$valid).toBe(true);
    });

    it("should validate the form if the model value is set to boolean 'false'", function () {
        var element = $compile('<form name="myForm">' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="true" ng-required="true" ng-boolean-radio />' +
                                    '<input name="myModel" ng-model="myModel" type="radio" value="false" ng-required="true" ng-boolean-radio />' +
                               '</form>')($rootScope);

        $rootScope.$apply();

        $rootScope.myModel = false;
        $rootScope.$apply();

        expect($rootScope.myForm.$valid).toBe(true);
    });
});
