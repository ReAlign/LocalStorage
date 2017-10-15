const _ = require('./../../src/lib/util');
const LS = require('./../../src/localstorage');

test('utilNot', function() {
    expect(_.support()).toBe(false);
});

test('clearNot', function() {
    expect(LS.clear()).toBe(false);
});

test('getKeyListNot', function() {
    expect(LS.getKeyList()).toBe(false);
});

test('getAllNot', function() {
    expect(LS.getAll()).toBe(false);
});