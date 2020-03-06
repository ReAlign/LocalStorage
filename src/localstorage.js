import _ from './lib/util';

let LocalStorage = {
    storage: window.localStorage,
    set(key = '', value = '', cover = false) {
        if (key && _.support()) {
            // 不覆盖
            if(!cover && this.get(key) != null && this.get(key) != false) {
                console.error(`data ${key} already existed.\nif you want to cover the original data, use set(key, value, true)`);
                return false;
            }
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
    },
    getSurplusCapacityKb() {
        if (_.support()) {
            let maxCapacity = 1024 * 1024 * 5;
            let usedCapacity = JSON.stringify(this.storage).length;
            let surplus = (maxCapacity - usedCapacity) / 1024;
            return surplus;
        }
        return false;
    },
    /**
     * @name    获取剩余容量
     * @param {*} unit 单位 | [ b, kb, mb ]
     * @returns number / unit
     */
    getSurplusCapacity(unit = 'b') {
        if (_.support()) {
            const MAX = 1024 * 1024 * 5;
            const _map = {
                b: 1,
                kb: 1024,
                mb: 1024 * 1024
            };
            const unitLower = unit.toLowerCase();

            const usedSize = _.sizeOf(JSON.stringify(this.storage));

            //     sizeB            / unitNumber
            return (MAX - usedSize) / (_map(unitLower) || 1);
        }
        return false;
    }
};

export default LocalStorage;