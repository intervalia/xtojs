# xto.js - Extended Type Of

[![NPM version](http://img.shields.io/npm/v/xtojs.svg)](https://npmjs.org/package/xtojs)
[![Downloads](http://img.shields.io/npm/dm/xtojs.svg)](https://npmjs.org/package/xtojs)
[![Support us](http://img.shields.io/gittip/intervalia.svg)](https://www.gittip.com/intervalia/)
[![Build Status](https://travis-ci.org/intervalia/xtojs.svg)](https://travis-ci.org/intervalia/xtojs)
[![Coverage Status](https://coveralls.io/repos/github/intervalia/xtojs/badge.svg?branch=master)](https://coveralls.io/github/intervalia/xtojs?branch=master)

A type checking module for JavaScript/ES6 in &lt;2KB.

## Intro

JavaScript has never had a simple way of detecting what type of data a variable holds. For example some objects claim to be of type `object` when the developer expects them to be something like `string`, `boolean` or `array`

```javascript
typeof(''); // 'string'
typeof(String('')); // string
typeof(new String('')); // object
typeof([]); // object
typeof(true); // boolean
typeof(new Boolean(true)); // object
```

I wrote my Extended Type Of (xto) code to allow me to see the underlying type of any value. I also have it extend the types that can be returned. For example I can now see that `new Date()` will have an extended type of `date` instead of `object`.

I also added into xto the ability to check to see if a value `is` of a particular type or not. These `is` functions use similar naming to the value types. `isArray` tests to see if the value is an `Array`. `isNumber` tests to see if the value is a `Number` object or a number primitive.

I added two special `is` functions to simplify checking for `Arrays` and typed arrays. `isArray` only returns `true` if the value is a traditional JavaScript `Array`. `isTypedArray` returns `true` is the value is any of the ES6 typed arrays, like `Int32Array` or `Float64Array`. `isAnyArray` will return `true` if the value is either a typed array or a traditional JavaScript `Array` object.

I added two functions that allow you to see the instance of any value. It is similar to the JavaScript `instanceof` operator except that it is a function and it returns the Class name of the value. For example `xto.instnace([])` returns `Array` and `xto.instance(5)` returns `Number`

For those that would like to see the Class name hierarchy for any given value. In the browser a call to `xto.instances(document)` returns `["HTMLDocument", "Document", "Node", "EventTarget", "Object"]`.

## Installing with npm

```shell
npm install xtojs
```

## Installing with Bower
Use the repository hook:

```shell
bower install https://github.com/intervalia/xtojs.git
```

## Manual installation

* Always use the source files from the `dist` directory [`xto.js` and `xto.min.js`].
* Always place the `<script src="dist/xto.min.js"></script>` tag or `<script src="dist/xto.js"></script>` tag before your closing `</body>` tag and before your code that needs to use it.

```html
<html>
<body>
  <!-- Place your html above -->
  <script src="dist/xto.min.js"></script>
  <script>
  // You can now use the xto module
  </script>
</body>
</html>
```

## Functions

### `is` functions

These functions let you determine if a value is a particular type.

The function `isTypedArray` will return `false` for `Array` and `true` for any of the typed arrays.

> All ES6 typed array `is`-funciton are supported:  
> `isArray()`, `isInt8Array()`, `isUint8Array()`, `isUint8ClampedArray()`, `isInt16Array()`, `isUint16Array()`, `isInt32Array()`, `isUint32Array()`, `isFloat32Array()`, `isFloat64Array()`

```javascript
xto.isArray([]); // true
xto.isArray(new Int8Array()); // false
xto.isAnyArray([]); // true
xto.isAnyArray(new Int8Array()); // true
xto.isTypedArray(new Uint16Array()); // true
xto.isInt32Array(new Int32Array()); // true
xto.isObject({}); // true
xto.isString(''); // true
xto.isError(new Error()); // true
xto.isDate(new Date()); // true
xto.isRegExp(/test/i); // true
xto.isFunction(function () {}); // true
xto.isBoolean(true); // true
xto.isNumber(1); // true
xto.isNull(null); // true
xto.isUndefined(); // true
xto.isMap(new Map()); // true
xto.isSet(new Set()); // true
xto.isWeakMap(new WeakMap()); // true
xto.isWeakSet(new WeakSet()); // true
xto.isWeakMap(new ArrayBuffer()); // true
xto.isWeakMap(new DataView()); // true
xto.isPromise(new Promise(function() {})); // true
```

### `typeof` function

Get the type, in lowercase, of any value. This is extended to include new ES6 types

```js
function CoolObj() {
  this.name = "My Cool Object";
}

xto.typeof([]); // 'array'
xto.typeof(new Int8Array()); // 'int8array'
xto.typeof({}); // 'object'
xto.typeof(''); // 'string'
xto.typeof(String('')); // 'string'
xto.typeof(new SyntaxError()); // 'error'
xto.typeof(new Date()); // 'date'
xto.typeof(/test/i); // 'regexp'
xto.typeof(function () {}); // 'function'
xto.typeof(true); // 'boolean'
xto.typeof(1); // 'number'
xto.typeof(null); // 'null'
xto.typeof(); // 'undefined'
xto.typeof(new Map()); // 'map'
xto.typeof(new Set()); // 'set'
xto.typeof(new WeakMap()); // 'weakmap'
xto.typeof(new WeakSet()); // 'weakset'
xto.typeof(new ArrayBuffer()); // 'arraybuffer'
xto.typeof(new DataView()); // 'dataview'
xto.typeof(new Promise(function() {})); // 'promise'
xto.typeof(new CoolObj()); // 'object'
```

### `instance` function

Get the instance of any value or object. This is extended to include new ES6 types and custom objects and classes.

```js
function CoolObj() {
  this.name = "My Cool Object";
}

class CoolClass {
  constructor() {
    this.name = "My Cool Object";
  }
}

xto.instance([]); // 'Array'
xto.instance(new Int8Array()); // 'Int8Array'
xto.instance({}); // 'Object'
xto.instance(''); // 'String'
xto.instance(String('')); // 'String'
xto.instance(new SyntaxError()); // 'SyntaxError'
xto.instance(new Date()); // 'Date'
xto.instance(/test/i); // 'RegExp'
xto.instance(function () {}); // 'Function'
xto.instance(true); // 'Boolean'
xto.instance(1); // 'Number'
xto.instance(null); // 'Null'
xto.instance(); // 'Undefined'
xto.instance(new Map()); // 'Map'
xto.instance(new Set()); // 'Set'
xto.instance(new WeakMap()); // 'WeakMap'
xto.instance(new WeakSet()); // 'WeakSet'
xto.instance(new ArrayBuffer()); // 'ArrayBuffer'
xto.instance(new DataView()); // 'DataView'
xto.instance(new Promise(function() {})); // 'Promise'
xto.instance(new CoolObj()); // 'CoolObj'
xto.instance(new CoolClass()); // 'CoolClass'
```

### `instances` function

Get an array of instance hierarchy of any value or object.

```js
function CoolObj() {
  this.name = "My Cool Object";
}

class CoolClass {
  constructor() {
    this.name = "My Cool Class";
  }
}

class CoolClass2 extends CoolClass {
  constructor() {
    super();
    this.name = "My Cool Class 2";
  }
}
xto.instances(new Int8Array()); // ['Int8Array', 'TypedArray', 'Object']
xto.instances(new SyntaxError()); // ['SyntaxError', 'Error', 'Object']
xto.instances(new Date()); // ['Date', 'Object']
xto.instances(null); // ['Null']
xto.instances(); // ['Undefined']
xto.instances(new Promise(function() {})); // ['Promise', 'Object']
xto.instances(new CoolObj()); // ['CoolObj', 'Object']
xto.instances(new CoolClass()); // ['CoolClass', 'Object']
xto.instances(new CoolClass2()); // ['CoolClass2', 'CoolClass', 'Object']
```

## Browser compatibility

I have not tested this is early browsers. I know this will work in IE10 and above. If you need support for earlier browsers, let me know and I can make a special version that works for those browsers.

This should also work in all version of Node.js and IO.js, but the ES6 functions will only work if you have ES6 enabled.

## Versions

I use **semver** for my versioning. When I increase the major version it is due to breaking changes.

#### Version 2.0 breaking changes

As of version 2.0 the function `isArray` will only return `true` for `Array` and `[]` and `false` for any typed arrays.

Version 2.0 supplies the function `isAnyArray` to see if an object is either an `Array` or a typed array.

## Contributing

* Pull Requests are accepted.
* Please maintain the existing coding style.
* Always add unit tests for any new or changed functionality.
* Always run Gulp.

## Release history

- 2.0.0 - Dec 7, 2016 (1,170 bytes minified)
  - Added `instances` and reduced code size where possible.
  - Added `isAnyArray` and now `isArray` only returns true for `Array` and `[]`. *BREAKING CHANGE*
  - Added tests for `instances` and `isAnyArray` and fixed for `isArray`
  - Updated the documentation

- 1.1.2 - Dec 6, 2016
  - Correcting Docs and changing version to allow NPM publish.

- 1.1.0 - Dec 6, 2016
  - Correcting Docs. And correcting my NPM deployment.

- 1.0.0 - Dec 6, 2016
  - Initial release
