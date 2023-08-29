# xto.js - eXtended `typeof`

[![NPM version](http://img.shields.io/npm/v/xtojs.svg)](https://npmjs.org/package/xtojs)
[![Downloads](http://img.shields.io/npm/dm/xtojs.svg)](https://npmjs.org/package/xtojs)

An extensive type checking module for JavaScript/ES6 in ~~&lt;2KB~~. **Now less than 1KB!**

## Intro

JavaScript has never had a simple way of detecting what type of data a variable holds. For example some objects claim to be of type `object` when the developer expects them to be something like `string`, `boolean` or `array`

``` js
typeof '' // 'string'
typeof String('') // string
typeof new String('') // object
typeof [] // object
typeof true // boolean
typeof new Boolean(true) // object
```

**xtojs** is a comprehensive JavaScript library that provides a powerful set of tools for working with data types. One of the key features of xtojs is the ability to more accurately determine the type of a variable or expression. This is done using a series of `is` methods for all the defined data types in JavaScript, such as `isString`, `isNumber`, `isBoolean`, `isPromise`, and `isDate`, as well as all other built in JavaScript types. This means that developers can use the `is` methods to and handle different data types more easily.

In addition to the `is` methods, xtojs provides additional methods to gain more insight into the type of a given value. The built in JavaScript `typeof` provides limited, and often misleading, information about the value in question. The `xto.typeof` method returns a lowercase string indicating the detailed type of a given value, such as `'string'`, `'date'`, `'symbol'`, `'promise'`, `'regexp'`, `'function'`, `'bigint'`, etc.

The `xto.instance` method returns the name of the value type, such as `'String'`, `'Promise'`, `'Date'`, `'BigInt'`, `'Symbol'`, etc.

The `xto.instances` method returns an array of names of the type hierarchy, which can be useful when you need to perform type checks on more complex data types. For a `Date` object `xto.instance` would return the string `'Date'` and `xto.instances` will return `['Date', 'Object']`. For a `BigInt64Array` it will return `['BigInt64Array', 'TypedArray', 'Object']`.

The xtojs library also supports less common data types, such as symbols, big integers, and typed arrays, which are not covered by the built-in typeof operator. This allows developers to work with these data types more easily and efficiently, without having to write complex type checking logic.

Overall, the xtojs library provides a powerful set of tools for working with data types in JavaScript. By using the library, developers can simplify their code, avoid complex type checking logic, and gain a better understanding of the data they are working with. If you're looking to write more efficient and intuitive code, the xtojs library is definitely worth considering.

There are two special `is` methods to simplify checking for `Arrays` and typed arrays. `xto.isArray` only returns `true` if the value is a traditional JavaScript `Array`. `xto.isTypedArray` returns `true` is the value is any of the ES6 typed arrays, like `Int32Array` or `Float64Array`. `xto.isAnyArray` will return `true` if the value is either a typed array or a traditional JavaScript `Array` object.

There are two methods that allow you to see the instance of any value. It is similar to the JavaScript `instanceof` operator except that it is a method and it returns the Class name of the value. For example `xto.instance([])` returns `Array` and `xto.instance(5)` returns `Number`

For those that would like to see the Class name hierarchy for any given value. In the browser a call to `xto.instances(document)` returns `["HTMLDocument", "Document", "Node", "EventTarget", "Object"]`.

## Installing with npm

```shell
npm install xtojs
```

## Use in Node

Using `require`:

```js
const xto = require('xto');
console.log(xto.typeof(10));
```

or using `import`:

``` js
import xto from 'xto'
console.log(xto.typeof([]));
```


## Use in the browser

Either use browserify or manually copy the file `node_modules/dist/esm/xto.js` to the folder where you want it, like your public js folder.

```html
<html>
<body>
  <!-- Place your html above -->
  <script type="module">
    import xto from "./js/xtojs";

    // You can now use the xto module
    console.log(xto.typeof(new Date()));
  </script>
</body>
</html>
```

## Methods

### `is` methods

These methods let you determine if a value is a particular type.

The method `isTypedArray` will return `false` for `Array` and `true` for any of the typed arrays.

> All ES6+ typed array `is`-methods are supported:  
>`isArray(val)`, `isArrayBuffer(val)`, `isBigInt(val)`, `isBigInt64Array(val)`, `isBigUint64Array(val)`, `isBoolean(val)`, `isDataView(val)`, `isDate(val)`, `isError(val)`, `isFloat32Array(val)`, `isFloat64Array(val)`, `isFunction(val)`, `isInt16Array(val)`, `isInt32Array(val)`, `isInt8Array(val)`, `isMap(val)`, `isNull(val)`, `isNumber(val)`, `isObject(val)`, `isPromise(val)`, `isRegExp(val)`, `isSet(val)`, `isString(val)`, `isSymbol(val)`, `isUint16Array(val)`, `isUint32Array(val)`, `isUint8Array(val)`, `isUint8ClampedArray(val)`, `isUndefined(val)`, `isWeakMap(val)`, `isWeakSet(val)`

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
xto.isBigInt(1n); // true
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

Get the name of the type, in lowercase, of any value. This is extended to include all of the ES6+ types

```js
class CoolClass {
  constructor() {
    this.name = "My Cool Class";
  }
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
xto.typeof(new CoolClass()); // 'object'
```

### `instance` function

Get the name of the instance of any value or object. This includes all of the ES6+ types as well as all classes.

```js
function CoolObj() {
  this.name = "My Cool Object";
}

class CoolClass {
  constructor() {
    this.name = "My Cool Class";
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

Get an array of instance hierarchy of any value or object. *This can be helpful when you want to see all of the parents of a particular class.*

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

**xtojs** will not work on Internet Explorer or any other browser that does not support ES6.

This should also work in all LTS versions of Node.js. I would not recommend using older versions of Node.

## Versions

I use **semver** for my versioning. If I increase the major version it is due to breaking changes.


## Contributing

* Pull Requests are accepted.
* Please maintain the existing coding style.
* Always add unit tests for any new or changed functionality.
* Always run `npm test`

## Release history

- 2.2.0 - Aug 29, 2023 (952 bytes minified)
  - Fixed package.json to load proper file for require and import
  - Removed coveralls and travis related files and dependancies.
  - Updated external packages.

- 2.1.0 - Feb 22, 2023 (952 bytes minified)
  - Added CJS and ESM versions of the built code
  - Converted all of the code to ES6+ greatly reducing its size
  - Removed gulp and moved build into npm.
  - Removed jshint and added eslint
  - Removed coveralls support (for now?)
  - Updated the documentation
  - Added *Terser* to do minification and to generate both esm and cjs dist versions
  - Updated README.md to include all changes.
  - Updated testing to always test for `Map`, `WeakMap`, `Promise` and other ES6+ features
  - Added support for:
    - `Symbol`
    - `BigInt`
    - `BigInt64Array`
    - `BigUint64Array`

- 2.0.0 - Dec 7, 2016 (1,170 bytes minified)
  - Added `instances` and reduced code size where possible.
  - Added `isAnyArray`. Returns `true` for `Array()`, `[]` and all typed arrays.
  - Now `isArray` only returns `true` for `Array()` and `[]`. __*BREAKING CHANGE*__
  - Added tests for `instances` and `isAnyArray` and fixed for `isArray`

> **Version 2.0 breaking changes**
>
> As of version 2.0 the function `isArray` will only return `true` for `Array` and `[]` and `false` for any typed arrays.
>
> Version 2.0 includes the function `isAnyArray` to see if an object is either an `Array` or a typed array.

- 1.1.2 - Dec 6, 2016
  - Correcting Docs and changing version to allow NPM publish.

- 1.1.0 - Dec 6, 2016
  - Correcting Docs. And correcting my NPM deployment.

- 1.0.0 - Dec 6, 2016
  - Initial release
