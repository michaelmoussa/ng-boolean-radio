ng-boolean-radio
================

An AngularJS directive to work around but where radio inputs with boolean value 'false' are incorrectly flagged 'invalid' when using ng-required.

Overview
--------

There's a bug in the latest stable version of [AngularJS](http://angularjs.org) (1.0.6 at the time of this writing) that prevents radio input fields with boolean values in the model from validating properly. An example of this behavior can be found [in this fiddle](http://jsfiddle.net/8FAb3/1/).

If you attempt to workaround the validation issue by using `value="true/false"`, the radio values won't be selected by default when populating from your model's booleans. If you attempt to workaround the default selection issue using `ng-value="true/false"`, then `ng-required` marks the form invalid when you select the "false" option.

I came up with this workaround, which turns boolean true / false values from your model into string "true" / "false" values. This will cause the radio inputs' default selections on the form to be made according to what's in the model. It will also allow you to select the "false" option and still validate the form when `ng-required` is set (because `"false" != false`).

Usage
-----

Copy `ngBooleanRadio.js` into your project and include it.

Add it to your module. Example:
```javascript
angular.module("myApp", [])
  .directive("ngBooleanRadio", ngBooleanRadio);
```

Apply it to any of your form inputs. Example:

```html
<form name="myForm">
  <strong>Is this directive going to solve your boolean radio input problems?</strong>
  <label>
    Yes <input type="radio" ng-model="question" value="true" ng-required="true" ng-boolean-radio />
  </label>
  <label>
    No <input type="radio" ng-model="question" value="false" ng-required="true" ng-boolean-radio />
  </label>
</form>
```

Fire off your `$http` request(s) to get your data from the server, and any boolean values corresponding to form inputs on which you've applied `ng-boolean-radio` will cause the fields on the form to be checked. Any selections made on the html page will be sent back to the server as booleans again when saving.

Testing
-------

Test suite is included under `./test`. You can run the tests yourself if you wish by:

1. Install the dependencies using [Bower](http://bower.io/).
2. Install [Testem](https://github.com/airportyh/testem).
3. From the project root directory, run `testem --file ./test/testem.json`.
4. Open your favorite browser to whatever URL the Testem console says (or use [PhantomJS](http://phantomjs.org/) by running `testem --file ./test/testem.json --launch phantomjs` instead).
5. If you've done everything right, you will see a message saying all tests passed.

Contributing
------------

See something wrong or think you can improve it? Bug Reports and Pull Requests are welcome.

If you send a Pull Request please include test(s) or a detailed explanation of what you've done so I can add them myself.
