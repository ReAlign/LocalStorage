(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LocalStorage"] = factory();
	else
		root["LocalStorage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStorage = {
    storage: window.localStorage,
    set: function set() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var cover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (key && _util2.default.support()) {
            // 不覆盖
            if (!cover && this.get(key) != null && this.get(key) != false) {
                console.error('data ' + key + ' already existed.\nif you want to cover the original data, use set(key, value, true)');
                return false;
            }
            this.storage.setItem(key, JSON.stringify(value));
            var obj = {};
            obj.key = key;
            obj.val = this.get(key);
            return obj;
        }
        return false;
    },
    get: function get() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (key && _util2.default.support()) {
            return _util2.default.jsonParse(this.storage.getItem(key));
        }
        return false;
    },
    has: function has() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (key && _util2.default.support()) {
            return this.get(key) != null;
        }
        return false;
    },
    remove: function remove() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (key && _util2.default.support()) {
            this.storage.removeItem(key);
            return !this.get(key);
        }
        return false;
    },
    clear: function clear() {
        if (_util2.default.support()) {
            this.storage.clear();
            return !this.storage.length;
        }
        return false;
    },
    getKeyList: function getKeyList() {
        if (_util2.default.support()) {
            var list = [];

            for (var i = 0; i < this.storage.length; i++) {
                list.push(this.storage.key(i));
            }

            return list;
        }
        return false;
    },
    getAll: function getAll() {
        if (_util2.default.support()) {
            var allKeys = this.getKeyList();
            var res = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = allKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var k = _step.value;

                    res[k] = this.get(k);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return res;
        }
        return false;
    },
    getSurplusCapacityKb: function getSurplusCapacityKb() {
        if (_util2.default.support()) {
            var maxCapacity = 1024 * 1024 * 5;
            var usedCapacity = JSON.stringify(this.storage).length;
            var surplus = (maxCapacity - usedCapacity) / 1024;
            return surplus;
        }
        return false;
    }
};

exports.default = LocalStorage;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localstorage = __webpack_require__(0);

var _localstorage2 = _interopRequireDefault(_localstorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _localstorage2.default;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _ = {
    support: function support() {
        if (!window.localStorage) {
            console.error('(〒︿〒) 该浏览器不支持localstorage');
            return false;
        }

        return true;
    },
    jsonParse: function jsonParse(string) {
        var res = null;
        try {
            res = JSON.parse(string);
        } catch (e) {
            return null;
        }
        return res;
    }
};

exports.default = _;
module.exports = exports['default'];

/***/ })
/******/ ]);
});