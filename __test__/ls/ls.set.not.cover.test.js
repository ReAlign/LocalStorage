require('localstorage-mocker');

const _ = require('./../../src/lib/util');
const LS = require('./../../src/localstorage');

const _str = '123';

// set
test('setNoCoverString1', function() {
    expect(LS.set('strCover', _str)).not.toBeNull();
});
test('setNoCoverString2', function() {
    expect(LS.set('strCover', _str)).toBe(false);
});
test('removeNoCoverString', function() {
    expect(LS.remove('strCover')).toBe(true);
});