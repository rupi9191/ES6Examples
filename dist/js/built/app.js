(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _defaultParameters = require('./defaultParameters');

var _templateLiterals = require('./templateLiterals');

var _multilineString = require('./multilineString');

var _classSystem = require('./classSystem');

var _arrowFunction = require('./arrowFunction');

var _scoping = require('./scoping');

var _destructuring = require('./destructuring');

var _spreadOperator = require('./spreadOperator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)('a.page-scroll').click(function (event) {
        var $anchor = (0, _jquery2.default)(this);
        var id = $anchor.attr('href');
        switch (id) {
            case "#1":
                (0, _jquery2.default)(id).find(".es5 span").text((0, _defaultParameters.defaultParametersES5)());
                (0, _jquery2.default)(id).find(".es6 span").text((0, _defaultParameters.defaultParametersES6)());
                break;
            case "#2":
                (0, _jquery2.default)(id).find(".es5 span").text((0, _templateLiterals.templateLiteralsES5)());
                (0, _jquery2.default)(id).find(".es6 span").text((0, _templateLiterals.templateLiteralsES6)());
                break;
            case "#3":
                (0, _jquery2.default)(id).find(".es5 span").text((0, _multilineString.multilineStringES5)());
                (0, _jquery2.default)(id).find(".es6 span").text((0, _multilineString.multilineStringES6)());
                break;
            case "#4":
                var persones5 = new _classSystem.PersonES5("Rupesh from es5");
                var persones6 = new _classSystem.PersonES6("Rupesh from es6");
                (0, _jquery2.default)(id).find(".es5 span").text(persones5.getName());
                (0, _jquery2.default)(id).find(".es6 span").text(persones6.getName());
                break;
            case "#5":
                (0, _jquery2.default)(id).find(".es5 span").text((0, _arrowFunction.es5)(2, 3));
                (0, _jquery2.default)(id).find(".es6 span").text((0, _arrowFunction.es6)(2, 3));
                break;
            case "#6":
                (0, _jquery2.default)(id).find(".es5 span").text((0, _scoping.es5Scoping)());
                (0, _jquery2.default)(id).find(".es6 span").text((0, _scoping.es6Scoping)());
                break;
            case "#8":
                (0, _jquery2.default)(id).find(".es5 span").text((0, _destructuring.es5Destructuring)());
                (0, _jquery2.default)(id).find(".es6 span").text((0, _destructuring.es6Destructuring)());
                break;
            case "#9":
                (0, _jquery2.default)(id).find(".es5 span").text((0, _spreadOperator.es5SpreadOperator)());
                (0, _jquery2.default)(id).find(".es6 span").text((0, _spreadOperator.es6SpreadOperator)());
                break;
        }
        (0, _jquery2.default)('html,body').animate({ scrollTop: (0, _jquery2.default)($anchor.attr('href')).offset().top }, 1000);
    });

    (0, _jquery2.default)("select").on('change', function (e) {
        (0, _jquery2.default)('a.page-scroll[href="' + e.target.value + '"]').click();
    });
});

},{"./arrowFunction":2,"./classSystem":3,"./defaultParameters":4,"./destructuring":5,"./multilineString":6,"./scoping":7,"./spreadOperator":8,"./templateLiterals":9,"jquery":"jquery"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//es5

var es5 = exports.es5 = function es5(x, y) {
    console.log("es5", "This is es5 syntax");
    return x + y;
};

//es6
var es6 = exports.es6 = function es6(x, y) {
    console.log("es5", "This is es6 syntax");
    return x + y;
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonES5 = exports.PersonES5 = function PersonES5(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    };
};

//es6

var PersonES6 = exports.PersonES6 = function () {
    function PersonES6(name) {
        _classCallCheck(this, PersonES6);

        this.name = name;
    }

    _createClass(PersonES6, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }]);

    return PersonES6;
}();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultParametersES5 = defaultParametersES5;
exports.defaultParametersES6 = defaultParametersES6;
//es5
function defaultParametersES5(x, y) {
    var a = x || 1;
    var b = y || 1;
    console.log("es5", a + b);
    return a + b;
}

//es6
function defaultParametersES6() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    console.log("es6", x + y);
    return x + y;
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//es5 - destructuring a object
var es5Destructuring = exports.es5Destructuring = function es5Destructuring() {
    var person = { name: "Rupesh", age: 25, rank: 1 };
    var name = person.name;
    var age = person.age;
    console.log("es5-destructuring", name);
    return name;
};
//es6- destructuring
var es6Destructuring = exports.es6Destructuring = function es6Destructuring() {
    var person = { name: "Rupesh", age: 25, rank: 1 };
    var name = person.name,
        age = person.age;

    console.log("es6-destructuring", name);
    return name;
};

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multilineStringES5 = multilineStringES5;
exports.multilineStringES6 = multilineStringES6;
function multilineStringES5() {
    var paragraph = "My name is Rupesh" + "I am currently working at Rakuten" + "My expertise are mobile application development and front end engineering.";
    console.log("es5", paragraph);
    return paragraph;
};

function multilineStringES6() {
    var paragraph = "My name is Rupesh\n                     I am currently working at Rakuten\n                     My expertise are mobile application\n                     development and front end engineering.";
    console.log("es5", paragraph);
    return paragraph;
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// es5 - for constants

var URL = exports.URL = 'http://google.com';

//es6 - constants

var BASE_URL = exports.BASE_URL = 'http://rakuten.com';

//introduction to let keyword
//es5
var es5Scoping = exports.es5Scoping = function es5Scoping() {
    if (true) {
        var name = "Rupesh";
    }
    console.log("es5-scoping", name);
    return name;
};
//es6
var es6Scoping = exports.es6Scoping = function es6Scoping() {
    if (true) {
        var _name = "Rupesh";
    }
    console.log("es6-scoping", name);
    return name;
};

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//es5 - spread operator
var explicitCall = function explicitCall(a, b, c) {
    console.log("Outpur:", "a:" + a + "b:" + b + "c:" + c);
};
var es5SpreadOperator = exports.es5SpreadOperator = function es5SpreadOperator() {
    var arr1 = [1, 2],
        arr2 = [3, 4];
    arr1 = arr1.concat(arr2);
    console.log("es5-spread", arr1);
    return arr1;
};

//es6
var es6SpreadOperator = exports.es6SpreadOperator = function es6SpreadOperator() {
    var arr2 = [3, 4];
    var arr1 = [1, 2].concat(arr2);
    console.log("es6-spread", arr1);
    return arr1;
};

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultParametersES5 = defaultParametersES5;
exports.templateLiteralsES5 = templateLiteralsES5;
exports.templateLiteralsES6 = templateLiteralsES6;
//es5
function defaultParametersES5(x, y) {
    var a = x || 1;
    var b = y || 1;
    console.log("es5", a + b);
    return a + b;
}

function templateLiteralsES5() {
    var first = "Rupesh",
        last = "B";
    console.log("es5", "My name is" + " " + first + " " + last);
    return "My name is" + " " + first + " " + last;
};

function templateLiteralsES6() {
    var first = "Rupesh",
        last = "B";
    console.log("es6", "My name is " + first + " " + last);
    return "My name is " + first + " " + last;
};

},{}]},{},[1]);
