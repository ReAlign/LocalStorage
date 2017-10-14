let _ = {
    support() {
        if (!window.localStorage) {
            console.error('(〒︿〒) 该浏览器不支持localstorage');
            return false;
        }

        return true;
    },
    jsonParse(string) {
        let res = null;
        try {
            res = JSON.parse(string);
        } catch (e) {
            return null;
        }
        return res;
    }
};

export default _;