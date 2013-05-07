/**
 * Handles boolean true / false => string "true" / "false" (and back again)
 * conversion between the model and view for proper behavior of boolean
 * radio inputs.
 */
var ngBooleanRadio = function () {
    "use strict";

    return {
        require: "ngModel",
        link:    function (scope, element, attrs, ngModelController) {
            /**
             * Map boolean true / false to string "true" / "false", respectively.
             *
             * @return {string} "true" if modelValue is true, "false" if modelValue
             *                  is false, undefined otherwise.
             */
            ngModelController.$formatters.push(function (modelValue) {
                if (modelValue === true)
                {
                    return "true";
                }
                else if (modelValue === false)
                {
                    return "false";
                }
                else
                {
                    return undefined;
                }
            });

            /**
             * Map string "true" / "false" to boolean true / false, respectively.
             *
             * @return {boolean} true if viewValue is "true", false if viewValue
             *                  is "false", undefined otherwise.
             */
            ngModelController.$parsers.push(function (viewValue) {
                if (viewValue === "true")
                {
                    return true;
                }
                else if (viewValue === "false")
                {
                    return false;
                }
                else
                {
                    return undefined;
                }
            });
        }
    };
};
