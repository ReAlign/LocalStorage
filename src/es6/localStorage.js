let LS = {
    storage: window.localStorage,
    support() {
        if (!window.localStorage) {
            console.log("该浏览器不支持localstorage, (〒︿〒)");
            return false;
        } else {
            return true;
        }
    },
    set(key = '', value = '') {
        if (key && LS.support()) {
            LS.storage.setItem(key, value);
            return LS.get(key) == value;
        }
    },
    get(key = '') {
        if (key && LS.support()) {
            return LS.storage.getItem(key);
        }
    },
    remove(key = '') {
        if (key && LS.support()) {
            LS.storage.removeItem(key);
            return !LS.storage.get(key);
        }
    },
    getKeyList() {
        if (LS.support()) {
            let list = [];

            for (let i = 0; i < LS.storage.length; i++) {
                list.push(LS.storage.key(i));
            }

            return list;
        }
    }
};

module.exports = LS;