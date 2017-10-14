'use strict';

var LS = {
    storage: window.localStorage,
    support: function support() {
        if (!window.localStorage) {
            console.log("该浏览器不支持localstorage, (〒︿〒)");
            return false;
        } else {
            return true;
        }
    },
    set: function set() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        if (key && LS.support()) {
            LS.storage.setItem(key, value);
            return LS.get(key) == value;
        }
    },
    get: function get() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (key && LS.support()) {
            return LS.storage.getItem(key);
        }
    },
    remove: function remove() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (key && LS.support()) {
            LS.storage.removeItem(key);
            return !LS.storage.get(key);
        }
    },
    getKeyList: function getKeyList() {
        if (LS.support()) {
            var list = [];

            for (var i = 0; i < LS.storage.length; i++) {
                list.push(LS.storage.key(i));
            }

            return list;
        }
    }
};