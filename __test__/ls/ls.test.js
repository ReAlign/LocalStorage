require('localstorage-mocker');

const LS = require('./../../src/localstorage');
const _ = require('./../../src/lib/util');
const _t = require('n-tools');

const _num1 = 123;
const _str1 = '123';
const _arr1 = [1, 2, '3'];
const _obj1 = {
    name: 'realign',
    age: 23
};

// set
test('setString1', function() {
    expect(LS.set('str1', _str1, true)).not.toBeNull();
});
test('setString2', function() {
    expect(LS.set('str2')).not.toBeNull();
});
test('setString3', function() {
    expect(LS.set()).toBe(false);
});

test('setNumber1', function() {
    expect(LS.set('num1', _num1, true)).not.toBeNull();
});
test('setNumber2', function() {
    expect(LS.set('num2')).not.toBeNull();
});
test('setNumber3', function() {
    expect(LS.set()).toBe(false);
});

test('setArray1', function() {
    expect(LS.set('arr1', _arr1, true)).not.toBeNull();
});
test('setArray2', function() {
    expect(LS.set('arr2')).not.toBeNull();
});
test('setArray3', function() {
    expect(LS.set()).toBe(false);
});

test('setObject1', function() {
    expect(LS.set('obj1', _obj1, true)).not.toBeNull();
});
test('setObject2', function() {
    expect(LS.set('obj2')).not.toBeNull();
});
test('setObject3', function() {
    expect(LS.set()).toBe(false);
});

// get
test('getString1', function() {
    expect(LS.get('str1')).not.toBeNull();
});
test('getString2', function() {
    expect(LS.get('str11')).toBeNull();
});
test('getString3', function() {
    expect(LS.get()).toBe(false);
});

test('getNumber1', function() {
    expect(LS.get('num1')).not.toBeNull();
});
test('getNumber2', function() {
    expect(LS.get('num11')).toBeNull();
});
test('getNumber3', function() {
    expect(LS.get()).toBe(false);
});

test('getArray1', function() {
    expect(LS.get('arr1')).not.toBeNull();
});
test('getArray2', function() {
    expect(LS.get('arr11')).toBeNull();
});
test('getArray3', function() {
    expect(LS.get()).toBe(false);
});

test('getObject1', function() {
    expect(LS.get('obj1')).not.toBeNull();
});
test('getObject2', function() {
    expect(LS.get('obj11')).toBeNull();
});
test('getObject3', function() {
    expect(LS.get()).toBe(false);
});

// has
test('hasString1', function() {
    expect(LS.has('str1')).toBe(true);
});
test('hasString2', function() {
    expect(LS.has('str11')).toBe(false);
});
test('hasString3', function() {
    expect(LS.has()).toBe(false);
});

test('hasNumber1', function() {
    expect(LS.has('num1')).toBe(true);
});
test('hasNumber2', function() {
    expect(LS.has('num11')).toBe(false);
});
test('hasNumber3', function() {
    expect(LS.has()).toBe(false);
});

test('hasArray1', function() {
    expect(LS.has('arr1')).toBe(true);
});
test('hasArray2', function() {
    expect(LS.has('arr11')).toBe(false);
});
test('hasArray3', function() {
    expect(LS.has()).toBe(false);
});

test('hasObject1', function() {
    expect(LS.has('obj1')).toBe(true);
});
test('hasObject2', function() {
    expect(LS.has('obj11')).toBe(false);
});
test('hasObject3', function() {
    expect(LS.has()).toBe(false);
});

// remove
test('removeString1', function() {
    expect(LS.remove('str1')).toBe(true);
});
test('removeString2', function() {
    expect(LS.remove('str11')).toBe(true);
});
test('removeString3', function() {
    expect(LS.remove()).toBe(false);
});

// getKeyList
test('getKeyList1', function() {
    expect(LS.getKeyList()).not.toBeNull();
});

// getAll
test('getAll1', function() {
    expect(LS.getAll()).not.toBeNull();
});

// clear
test('clear', function() {
    expect(LS.clear()).toBe(true);
});

// getKeyList
test('getKeyList2', function() {
    expect(LS.getKeyList().length === 0).toBe(true);
});

// getAll
test('getAll2', function() {
    expect(_t.compareObject(LS.getAll(), {})).toBe(true);
});