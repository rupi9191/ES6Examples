(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _defaultParameters = require('./defaultParameters');

var _templateLiterals = require('./templateLiterals');

var _templateLiterals2 = _interopRequireDefault(_templateLiterals);

var _multilineString = require('./multilineString');

var _multilineString2 = _interopRequireDefault(_multilineString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)('a.page-scroll').click(function (event) {
        var $anchor = (0, _jquery2.default)(this);
        var id = $anchor.attr('href');
        console.log(id);
        switch (id) {
            case "#1":
                (0, _defaultParameters.defaultParametersES5)();
                (0, _defaultParameters.defaultParametersES6)();
                break;
            case "#2":
                (0, _templateLiterals2.default)();
                break;
            case "#3":
                (0, _multilineString2.default)();
                break;
        }
        (0, _jquery2.default)("body").animate({ scrollTop: (0, _jquery2.default)($anchor.attr('href')).offset().top }, 1000);
    });

    (0, _jquery2.default)("select").on('change', function (e) {
        console.log(this.value);
        (0, _jquery2.default)('a.page-scroll[href="' + e.target.value + '"]').click();
    });
});

},{"./defaultParameters":2,"./multilineString":3,"./templateLiterals":4,"jquery":"jquery"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultParametersES5 = defaultParametersES5;
exports.defaultParametersES6 = defaultParametersES6;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//es5
function defaultParametersES5(x, y) {
    var a = x || 1;
    var b = y || 1;
    console.log("es5", a + b);
    (0, _jquery2.default)('#1-es5>span').text(a + b);
}

//es6
function defaultParametersES6() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    console.log("es6", x + y);
    (0, _jquery2.default)('#1-es6>span').text(x + y);
}

},{"jquery":"jquery"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
                   value: true
});
exports.default = multilineString;
function multilineString() {

                   var paragraph1 = "My name is Rupesh" + "I am currently working at Rakuten" + "My expertise are mobile application development and front end engineering.";
                   var paragraph2 = "My name is Rupesh\n                       I am currently working at Rakuten\n                       My expertise are mobile application\n                       development and front end engineering.";
                   console.log("es5", paragraph1);
                   console.log("es6", paragraph2);
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = templateLiterals;
function templateLiterals() {
    var first = "Rupesh",
        last = "B";
    console.log("es5", "My name is" + " " + first + " " + last);
    console.log("es6", "My name is " + first + " " + last);
}

},{}]},{},[1]);
