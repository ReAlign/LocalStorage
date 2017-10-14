let support = () => {
    if (window.localStorage) {
        return true;
    } else {
        console.error('(〒︿〒) 该浏览器不支持localstorage');
        return false;
    }
};

let jsonParse = (string) => {
    let res = null;
    try {
        res = JSON.parse(string);
    } catch (e) {
        return null;
    }
    return res;
};

let Storage = {
    storage: window.localStorage,
    set(key = '', value = '') {
        this.storage.setItem(key, JSON.stringify(value));
        return this.get(key);
    },
    get(key = '') {
        if (key && support()) {
            return jsonParse(this.storage.getItem(key));
        }
    },
    remove(key = '') {
        if (key && support()) {
            this.storage.removeItem(key);
            return !this.get(key);
        }
    },
    clear() {
        if (support()) {
            this.storage.clear();
            return !this.storage.length;
        }
    },
    getKeyList() {
        if (support()) {
            let list = [];

            for (let i = 0; i < this.storage.length; i++) {
                list.push(this.storage.key(i));
            }

            return list;
        }
    },
    getAll() {
        if (support()) {
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