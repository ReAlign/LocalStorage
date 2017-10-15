# LocalStorage
[![NPM travis][travis-image]][github-url]
[![codebeat badge][codebeat-image]][codebeat-url]

[codebeat-url]: https://codebeat.co/projects/github-com-realign-localstorage-master
[github-url]: https://github.com/ReAlign/fastpage

[travis-image]: http://img.shields.io/travis/ReAlign/fastpage.svg
[codebeat-image]: https://codebeat.co/badges/d96c6ab1-b8be-40b6-991b-60d88d594198

# Introduction
`localStorage` 只能存储字符串，对于复杂数据结构，必须先进行序列化，才能存储，并且在读取的时候，又需要反序列化。

针对上述重复操作，对 `localStorage` 进行一次封装，默认对数据进行序列化、反序列化，使用户不需要关心除去自己需要保存、获取的数据之外的事情。

# Usage

```
import LS from './src/localstorage';
```

#### set

```
存储数据，返回 set 的对象
* set(key, value)
* return {
    key: key,
    val: value
}

Example:

LS.set('name', 'realign');
/**
return
{
    key: 'name',
    val: 'realign'
}
*/
```
#### get(key)

```
获取数据，返回 对应值（会保持原来的数据类型）
* get(key)
* return valye

Example:

LS.get('name'); // 'realign'
```

#### has(key)

```
判断是否存在此 key，返回 boolean
* has(key)
* return boolean

Example:

LS.has('name'); // true
LS.has('my'); // false
```
#### remove(key)

```
删除 key 对应的这条数据，
返回 boolean，该条数据是否仍存在
    已成功删除 true（传入不存在的key，仍会返回 true）
    未成功删除 false
* remove(key)
* return boolean

Example:

LS.remove('name'); // true
```
#### clear

```
清空 localstorage 数据
* clear()
* return boolean

Example:

LS.clear(); // true
```
#### getKeyList

```
获取 localstorage 所有 key
* getKeyList()
* return array 默认 []

Example:

LS.getKeyList(); // ['name', 'age']
```
#### getAll

```
获取 localstorage 所有 数据
* getAll()
* return object 默认 {}

Example:

LS.getAll(); // {'name': 'realign', 'age': 23}
```


