# xto.js [![Build Status](https://travis-ci.org/intervalia/xto.svg)](https://travis-ci.org/intervalia/xto)

A type checking module for JavaScript/ES6 in &lt;1KB.

```js
xto.isArray([]); // true
xto.isArray(new Int8Array()); // true
xto.isTypedArray(new Uint16Array()); // true
xto.isInt32Array(new Int32Array()); // true
// All typed arrays are supported
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
```

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

## Contributing

* Pull Requests are accepted.
* Please maintain the existing coding style.
* Always add unit tests for any new or changed functionality.
* Always run Gulp.

## Release history

- 1.1.0 - Dec 6, 2016
  - Correcting Docs. And correcting my NPM deployment.

- 1.0.0 - Dec 6, 2016
  - Initial release
