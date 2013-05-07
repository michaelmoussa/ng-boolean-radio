describe("ngBooleanRadio", function () {
    var $compile;
    var $rootScope;

    beforeEach(angular.mock.module("ngApp"));

    beforeEach(inject(["$compile", "$rootScope", function ($c, $rs) {
        $compile   = $c;
        $rootScope = $rs;
    }]));

    it("should not do anything useful yet", function () {
        expect(true).toBe(true);
    });
});
