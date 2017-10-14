import _ from './util';

let Storage = {
    storage: window.localStorage,
    set(key = '', value = '') {
        this.storage.setItem(key, JSON.stringify(value));
        return this.get(key);
    },
    get(key = '') {
        if (key && _.support()) {
            return _.jsonParse(this.storage.getItem(key));
        }
    },
    remove(key = '') {
        if (key && _.support()) {
            this.storage.removeItem(key);
            return !this.get(key);
        }
    },
    clear() {
        if (_.support()) {
            this.storage.clear();
            return !this.storage.length;
        }
    },
    getKeyList() {
        if (_.support()) {
            let list = [];

            for (let i = 0; i < this.storage.length; i++) {
                list.push(this.storage.key(i));
            }

            return list;
        }
    },
    getAll() {
        if (_.support()) {
            let allKeys = this.getKeyList();
            let res = {};
            for (let i of allKeys) {
                res[i] = this.get(i);
            }

            return res;
        }
    }
};

export default Storage;