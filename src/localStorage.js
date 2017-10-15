import _ from './lib/util';

let Storage = {
    storage: window.localStorage,
    set(key = '', value = '') {
        if (key && _.support()) {
            this.storage.setItem(key, JSON.stringify(value));
            let obj = {};
            obj.key = key;
            obj.val = this.get(key);
            return obj;
        }
        return false;
    },
    get(key = '') {
        if (key && _.support()) {
            return _.jsonParse(this.storage.getItem(key));
        }
        return false;
    },
    has(key = '') {
        if (key && _.support()) {
            return this.get(key) != null;
        }
        return false;
    },
    remove(key = '') {
        if (key && _.support()) {
            this.storage.removeItem(key);
            return !this.get(key);
        }
        return false;
    },
    clear() {
        if (_.support()) {
            this.storage.clear();
            return !this.storage.length;
        }
        return false;
    },
    getKeyList() {
        if (_.support()) {
            let list = [];

            for (let i = 0; i < this.storage.length; i++) {
                list.push(this.storage.key(i));
            }

            return list;
        }
        return false;
    },
    getAll() {
        if (_.support()) {
            let allKeys = this.getKeyList();
            let res = {};
            for (let k of allKeys) {
                res[k] = this.get(k);
            }

            return res;
        }
        return false;
    }
};

export default Storage;