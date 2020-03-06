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
_.getCharSize = (isUTF8 = true, str = '', i = 0) => {
    const charCode = str.charCodeAt(i);
    let delta = 0;

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
_.sizeOf = (str = '', charset = 'utf-8') => {
    const len = str.length;
    /* eslint-disable */
    const char_set = charset ? charset.toLowerCase() : '';
    const isUTF8 = char_set === 'utf-8';
    const isUTF16 = char_set === 'utf-16';
    /* eslint-enable */

    // 无长度 | 既不是utf-8、也不是utf-16
    if (!len || (!isUTF8 && !isUTF16)) {
        return null;
    }

    let totalSize = 0;
    for (let i = 0; i < len; i++) {
        totalSize += _.getCharSize(isUTF8, str, i);
    }

    return totalSize;
};

export default _;