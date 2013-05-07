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
        }
    };
};
