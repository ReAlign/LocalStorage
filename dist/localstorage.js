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
    },

    /**
     * @name    获取剩余容量
     * @param {*} unit 单位 | [ b, kb, mb ]
     * @returns number / unit
     */
    getSurplusCapacity: function getSurplusCapacity() {
        var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'b';

        if (_util2.default.support()) {
            var MAX = 1024 * 1024 * 5;
            var _map = {
                b: 1,
                kb: 1024,
                mb: 1024 * 1024
            };
            var unitLower = unit.toLowerCase();

            var usedSize = _util2.default.sizeOf(JSON.stringify(this.storage));

            //     sizeB            / unitNumber
            return (MAX - usedSize) / (_map(unitLower) || 1);
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

/**
 * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码
 *
 * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节
 * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节
 * 000800 - 00D7FF
   00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           三个字节
 * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
 *
 * 注: Unicode在范围 D800-DFFF 中不存在任何字符
 * {@link http://zh.wikipedia.org/wiki/UTF-8}
 *
 * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节
 * 000000 - 00FFFF  两个字节
 * 010000 - 10FFFF  四个字节
 *
 * @name    获取指定位置字符 size
 * @param   是否为utf-8
 * @param   字符串
 * @param   位置
 */
_.getCharSize = function () {
    var isUTF8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var charCode = str.charCodeAt(i);
    var delta = 0;

    if (isUTF8) {
        if (charCode <= 0x007f) {
            delta = 1;
        } else if (charCode <= 0x07ff) {
            delta = 2;
        } else if (charCode <= 0xffff) {
            delta = 3;
        } else {
            delta = 4;
        }
    } else {
        if (charCode <= 0xffff) {
            delta = 2;
        } else {
            delta = 4;
        }
    }

    return delta;
};

/**
 * @name    字符串大小
 * @param   字符串
 * @param   字符集
 */
_.sizeOf = function () {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf-8';

    var len = str.length;
    var char_set = charset ? charset.toLowerCase() : '';
    var isUTF8 = char_set === 'utf-8';
    var isUTF16 = char_set === 'utf-16';

    // 无长度 | 既不是utf-8、也不是utf-16
    if (!len || !isUTF8 && !isUTF16) {
        return null;
    }

    var totalSize = 0;
    for (var i = 0; i < len; i++) {
        totalSize += _.getCharSize(isUTF8, str, i);
    }

    return totalSize;
};

exports.default = _;
module.exports = exports['default'];

/***/ })
/******/ ]);
});