/* global describe, it, expect, xto */
/**
 * xto.js
 */
describe('xto', function () {

  describe('xto.isArray', function () {
    it('should return a true if an Array', function () {
      expect(xto.isArray([])).toBe(true);
      expect(xto.isArray(new Array())).toBe(true);
      expect(xto.isArray(new Int16Array())).toBe(true);
      expect(xto.isArray({})).toBe(false);
      expect(xto.isArray(new Object())).toBe(false);
      expect(xto.isArray(null)).toBe(false);
      expect(xto.isArray()).toBe(false);
      expect(xto.isArray(true)).toBe(false);
      expect(xto.isArray(Boolean(false))).toBe(false);
      expect(xto.isArray(10)).toBe(false);
      expect(xto.isArray(Number(10))).toBe(false);
      expect(xto.isArray('')).toBe(false);
      expect(xto.isArray(String(''))).toBe(false);
      expect(xto.isArray(new Date())).toBe(false);
      expect(xto.isArray(new Error())).toBe(false);
      expect(xto.isArray(/test/g)).toBe(false);
      expect(xto.isArray(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isArray(new Map())).toBe(false);
        expect(xto.isArray(new Set())).toBe(false);
        expect(xto.isArray(new WeakMap())).toBe(false);
        expect(xto.isArray(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isArray(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isTypedArray', function () {
    it('should return a true if a TypedArray', function () {
      expect(xto.isTypedArray([])).toBe(false);
      expect(xto.isTypedArray(new Array())).toBe(false);
      expect(xto.isTypedArray(new Int16Array())).toBe(true);
      expect(xto.isTypedArray({})).toBe(false);
      expect(xto.isTypedArray(new Object())).toBe(false);
      expect(xto.isTypedArray(null)).toBe(false);
      expect(xto.isTypedArray()).toBe(false);
      expect(xto.isTypedArray(true)).toBe(false);
      expect(xto.isTypedArray(Boolean(false))).toBe(false);
      expect(xto.isTypedArray(10)).toBe(false);
      expect(xto.isTypedArray(Number(10))).toBe(false);
      expect(xto.isTypedArray('')).toBe(false);
      expect(xto.isTypedArray(String(''))).toBe(false);
      expect(xto.isTypedArray(new Date())).toBe(false);
      expect(xto.isTypedArray(new Error())).toBe(false);
      expect(xto.isTypedArray(/test/g)).toBe(false);
      expect(xto.isTypedArray(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isTypedArray(new Map())).toBe(false);
        expect(xto.isTypedArray(new Set())).toBe(false);
        expect(xto.isTypedArray(new WeakMap())).toBe(false);
        expect(xto.isTypedArray(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isTypedArray(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isObject', function () {
    it('should return a true if an Object', function () {
      expect(xto.isObject([])).toBe(false);
      expect(xto.isObject(new Array())).toBe(false);
      expect(xto.isObject(new Int16Array())).toBe(false);
      expect(xto.isObject({})).toBe(true);
      expect(xto.isObject(new Object())).toBe(true);
      expect(xto.isObject(null)).toBe(false);
      expect(xto.isObject()).toBe(false);
      expect(xto.isObject(true)).toBe(false);
      expect(xto.isObject(Boolean(false))).toBe(false);
      expect(xto.isObject(10)).toBe(false);
      expect(xto.isObject(Number(10))).toBe(false);
      expect(xto.isObject('')).toBe(false);
      expect(xto.isObject(String(''))).toBe(false);
      expect(xto.isObject(new Date())).toBe(false);
      expect(xto.isObject(new Error())).toBe(false);
      expect(xto.isObject(/test/g)).toBe(false);
      expect(xto.isObject(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isObject(new Map())).toBe(false);
        expect(xto.isObject(new Set())).toBe(false);
        expect(xto.isObject(new WeakMap())).toBe(false);
        expect(xto.isObject(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isObject(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isString', function () {
    it('should return a true if a String', function () {
      expect(xto.isString([])).toBe(false);
      expect(xto.isString(new Array())).toBe(false);
      expect(xto.isString(new Int16Array())).toBe(false);
      expect(xto.isString({})).toBe(false);
      expect(xto.isString(new Object())).toBe(false);
      expect(xto.isString(null)).toBe(false);
      expect(xto.isString()).toBe(false);
      expect(xto.isString(true)).toBe(false);
      expect(xto.isString(Boolean(false))).toBe(false);
      expect(xto.isString(10)).toBe(false);
      expect(xto.isString(Number(10))).toBe(false);
      expect(xto.isString('')).toBe(true);
      expect(xto.isString(String(''))).toBe(true);
      expect(xto.isString(new Date())).toBe(false);
      expect(xto.isString(new Error())).toBe(false);
      expect(xto.isString(/test/g)).toBe(false);
      expect(xto.isString(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isString(new Map())).toBe(false);
        expect(xto.isString(new Set())).toBe(false);
        expect(xto.isString(new WeakMap())).toBe(false);
        expect(xto.isString(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isString(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isDate', function () {
    it('should return a true if a Date', function () {
      expect(xto.isDate([])).toBe(false);
      expect(xto.isDate(new Array())).toBe(false);
      expect(xto.isDate(new Int16Array())).toBe(false);
      expect(xto.isDate({})).toBe(false);
      expect(xto.isDate(new Object())).toBe(false);
      expect(xto.isDate(null)).toBe(false);
      expect(xto.isDate()).toBe(false);
      expect(xto.isDate(true)).toBe(false);
      expect(xto.isDate(Boolean(false))).toBe(false);
      expect(xto.isDate(10)).toBe(false);
      expect(xto.isDate(Number(10))).toBe(false);
      expect(xto.isDate('')).toBe(false);
      expect(xto.isDate(String(''))).toBe(false);
      expect(xto.isDate(new Date())).toBe(true);
      expect(xto.isDate(new Error())).toBe(false);
      expect(xto.isDate(/test/g)).toBe(false);
      expect(xto.isDate(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isDate(new Map())).toBe(false);
        expect(xto.isDate(new Set())).toBe(false);
        expect(xto.isDate(new WeakMap())).toBe(false);
        expect(xto.isDate(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isDate(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isRegExp', function () {
    it('should return a true if a RegExp', function () {
      expect(xto.isRegExp([])).toBe(false);
      expect(xto.isRegExp(new Array())).toBe(false);
      expect(xto.isRegExp(new Int16Array())).toBe(false);
      expect(xto.isRegExp({})).toBe(false);
      expect(xto.isRegExp(new Object())).toBe(false);
      expect(xto.isRegExp(null)).toBe(false);
      expect(xto.isRegExp()).toBe(false);
      expect(xto.isRegExp(true)).toBe(false);
      expect(xto.isRegExp(Boolean(false))).toBe(false);
      expect(xto.isRegExp(10)).toBe(false);
      expect(xto.isRegExp(Number(10))).toBe(false);
      expect(xto.isRegExp('')).toBe(false);
      expect(xto.isRegExp(String(''))).toBe(false);
      expect(xto.isRegExp(new Date())).toBe(false);
      expect(xto.isRegExp(new Error())).toBe(false);
      expect(xto.isRegExp(/test/g)).toBe(true);
      expect(xto.isRegExp(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isRegExp(new Map())).toBe(false);
        expect(xto.isRegExp(new Set())).toBe(false);
        expect(xto.isRegExp(new WeakMap())).toBe(false);
        expect(xto.isRegExp(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isRegExp(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isFunction', function () {
    it('should return a true if a Function', function () {
      expect(xto.isFunction([])).toBe(false);
      expect(xto.isFunction(new Array())).toBe(false);
      expect(xto.isFunction(new Int16Array())).toBe(false);
      expect(xto.isFunction({})).toBe(false);
      expect(xto.isFunction(new Object())).toBe(false);
      expect(xto.isFunction(null)).toBe(false);
      expect(xto.isFunction()).toBe(false);
      expect(xto.isFunction(true)).toBe(false);
      expect(xto.isFunction(Boolean(false))).toBe(false);
      expect(xto.isFunction(10)).toBe(false);
      expect(xto.isFunction(Number(10))).toBe(false);
      expect(xto.isFunction('')).toBe(false);
      expect(xto.isFunction(String(''))).toBe(false);
      expect(xto.isFunction(new Date())).toBe(false);
      expect(xto.isFunction(new Error())).toBe(false);
      expect(xto.isFunction(/test/g)).toBe(false);
      expect(xto.isFunction(function(){})).toBe(true);
      if (typeof Map === 'object') {
        expect(xto.isFunction(new Map())).toBe(false);
        expect(xto.isFunction(new Set())).toBe(false);
        expect(xto.isFunction(new WeakMap())).toBe(false);
        expect(xto.isFunction(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isFunction(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isBoolean', function () {
    it('should return a true if a Boolean', function () {
      expect(xto.isBoolean([])).toBe(false);
      expect(xto.isBoolean(new Array())).toBe(false);
      expect(xto.isBoolean(new Int16Array())).toBe(false);
      expect(xto.isBoolean({})).toBe(false);
      expect(xto.isBoolean(new Object())).toBe(false);
      expect(xto.isBoolean(null)).toBe(false);
      expect(xto.isBoolean()).toBe(false);
      expect(xto.isBoolean(true)).toBe(true);
      expect(xto.isBoolean(Boolean(false))).toBe(true);
      expect(xto.isBoolean(10)).toBe(false);
      expect(xto.isBoolean(Number(10))).toBe(false);
      expect(xto.isBoolean('')).toBe(false);
      expect(xto.isBoolean(String(''))).toBe(false);
      expect(xto.isBoolean(new Date())).toBe(false);
      expect(xto.isBoolean(new Error())).toBe(false);
      expect(xto.isBoolean(/test/g)).toBe(false);
      expect(xto.isBoolean(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isBoolean(new Map())).toBe(false);
        expect(xto.isBoolean(new Set())).toBe(false);
        expect(xto.isBoolean(new WeakMap())).toBe(false);
        expect(xto.isBoolean(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isBoolean(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isNumber', function () {
    it('should return a true if a Number', function () {
      expect(xto.isNumber([])).toBe(false);
      expect(xto.isNumber(new Array())).toBe(false);
      expect(xto.isNumber(new Int16Array())).toBe(false);
      expect(xto.isNumber({})).toBe(false);
      expect(xto.isNumber(new Object())).toBe(false);
      expect(xto.isNumber(null)).toBe(false);
      expect(xto.isNumber()).toBe(false);
      expect(xto.isNumber(true)).toBe(false);
      expect(xto.isNumber(Boolean(false))).toBe(false);
      expect(xto.isNumber(10)).toBe(true);
      expect(xto.isNumber(Number(10))).toBe(true);
      expect(xto.isNumber('')).toBe(false);
      expect(xto.isNumber(String(''))).toBe(false);
      expect(xto.isNumber(new Date())).toBe(false);
      expect(xto.isNumber(new Error())).toBe(false);
      expect(xto.isNumber(/test/g)).toBe(false);
      expect(xto.isNumber(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isNumber(new Map())).toBe(false);
        expect(xto.isNumber(new Set())).toBe(false);
        expect(xto.isNumber(new WeakMap())).toBe(false);
        expect(xto.isNumber(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isNumber(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isError', function () {
    it('should return a true if an Error', function () {
      expect(xto.isError([])).toBe(false);
      expect(xto.isError(new Array())).toBe(false);
      expect(xto.isError(new Int16Array())).toBe(false);
      expect(xto.isError({})).toBe(false);
      expect(xto.isError(new Object())).toBe(false);
      expect(xto.isError(null)).toBe(false);
      expect(xto.isError()).toBe(false);
      expect(xto.isError(true)).toBe(false);
      expect(xto.isError(Boolean(false))).toBe(false);
      expect(xto.isError(10)).toBe(false);
      expect(xto.isError(Number(10))).toBe(false);
      expect(xto.isError('')).toBe(false);
      expect(xto.isError(String(''))).toBe(false);
      expect(xto.isError(new Date())).toBe(false);
      expect(xto.isError(new Error())).toBe(true);
      expect(xto.isError(/test/g)).toBe(false);
      expect(xto.isError(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isError(new Map())).toBe(false);
        expect(xto.isError(new Set())).toBe(false);
        expect(xto.isError(new WeakMap())).toBe(false);
        expect(xto.isError(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isError(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isNull', function () {
    it('should return a true if a Null', function () {
      expect(xto.isNull([])).toBe(false);
      expect(xto.isNull(new Array())).toBe(false);
      expect(xto.isNull(new Int16Array())).toBe(false);
      expect(xto.isNull({})).toBe(false);
      expect(xto.isNull(new Object())).toBe(false);
      expect(xto.isNull(null)).toBe(true);
      expect(xto.isNull()).toBe(false);
      expect(xto.isNull(true)).toBe(false);
      expect(xto.isNull(Boolean(false))).toBe(false);
      expect(xto.isNull(10)).toBe(false);
      expect(xto.isNull(Number(10))).toBe(false);
      expect(xto.isNull('')).toBe(false);
      expect(xto.isNull(String(''))).toBe(false);
      expect(xto.isNull(new Date())).toBe(false);
      expect(xto.isNull(new Error())).toBe(false);
      expect(xto.isNull(/test/g)).toBe(false);
      expect(xto.isNull(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isNull(new Map())).toBe(false);
        expect(xto.isNull(new Set())).toBe(false);
        expect(xto.isNull(new WeakMap())).toBe(false);
        expect(xto.isNull(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isNull(new Promise(function(){}))).toBe(false);
      }
    });
  });

  describe('xto.isUndefined', function () {
    it('should return a true if Undefined', function () {
      expect(xto.isUndefined([])).toBe(false);
      expect(xto.isUndefined(new Array())).toBe(false);
      expect(xto.isUndefined(new Int16Array())).toBe(false);
      expect(xto.isUndefined({})).toBe(false);
      expect(xto.isUndefined(new Object())).toBe(false);
      expect(xto.isUndefined(null)).toBe(false);
      expect(xto.isUndefined()).toBe(true);
      expect(xto.isUndefined(true)).toBe(false);
      expect(xto.isUndefined(Boolean(false))).toBe(false);
      expect(xto.isUndefined(10)).toBe(false);
      expect(xto.isUndefined(Number(10))).toBe(false);
      expect(xto.isUndefined('')).toBe(false);
      expect(xto.isUndefined(String(''))).toBe(false);
      expect(xto.isUndefined(new Date())).toBe(false);
      expect(xto.isUndefined(new Error())).toBe(false);
      expect(xto.isUndefined(/test/g)).toBe(false);
      expect(xto.isUndefined(function(){})).toBe(false);
      if (typeof Map === 'object') {
        expect(xto.isUndefined(new Map())).toBe(false);
        expect(xto.isUndefined(new Set())).toBe(false);
        expect(xto.isUndefined(new WeakMap())).toBe(false);
        expect(xto.isUndefined(new WeakSet())).toBe(false);
      }
      if (typeof Promise === 'object') {
        expect(xto.isUndefined(new Promise(function(){}))).toBe(false);
      }
    });
  });

  if (typeof Promise === 'object') {
    describe('xto.isPromise', function () {
      it('should return a true if a Promise', function () {
        expect(xto.isPromise([])).toBe(false);
        expect(xto.isPromise(new Array())).toBe(false);
        expect(xto.isPromise(new Int16Array())).toBe(false);
        expect(xto.isPromise({})).toBe(false);
        expect(xto.isPromise(new Object())).toBe(false);
        expect(xto.isPromise(null)).toBe(false);
        expect(xto.isPromise()).toBe(true);
        expect(xto.isPromise(true)).toBe(false);
        expect(xto.isPromise(Boolean(false))).toBe(false);
        expect(xto.isPromise(10)).toBe(false);
        expect(xto.isPromise(Number(10))).toBe(false);
        expect(xto.isPromise('')).toBe(false);
        expect(xto.isPromise(String(''))).toBe(false);
        expect(xto.isPromise(new Date())).toBe(false);
        expect(xto.isPromise(new Error())).toBe(false);
        expect(xto.isPromise(/test/g)).toBe(false);
        expect(xto.isPromise(function(){})).toBe(false);
        if (typeof Map === 'object') {
          expect(xto.isPromise(new Map())).toBe(false);
          expect(xto.isPromise(new Set())).toBe(false);
          expect(xto.isPromise(new WeakMap())).toBe(false);
          expect(xto.isPromise(new WeakSet())).toBe(false);
        }
        if (typeof Promise === 'object') {
          expect(xto.isPromise(new Promise(function(){}))).toBe(false);
        }
      });
    });
  }

  describe('xto.instance', function () {
    it('should return proper type', function () {
      function TestObj() {
        this.val = 10;
      }
      expect(xto.instance([])).toBe('Array');
      expect(xto.instance(new Array())).toBe('Array');
      // Phantom does not correctly return the name of 'Int16Array'
      //expect(xto.instance(new Int16Array())).toBe('Int16Array');
      expect(xto.instance({})).toBe('Object');
      expect(xto.instance(new Object())).toBe('Object');
      expect(xto.instance(null)).toBe('null');
      expect(xto.instance()).toBe('undefined');
      expect(xto.instance(true)).toBe('Boolean');
      expect(xto.instance(Boolean(false))).toBe('Boolean');
      expect(xto.instance(10)).toBe('Number');
      expect(xto.instance(Number(10))).toBe('Number');
      expect(xto.instance('')).toBe('String');
      expect(xto.instance(String(''))).toBe('String');
      expect(xto.instance(new Date())).toBe('Date');
      expect(xto.instance(new Error())).toBe('Error');
      expect(xto.instance(/test/g)).toBe('RegExp');
      expect(xto.instance(function(){})).toBe('Function');
      expect(xto.instance(new TestObj())).toBe('TestObj');
      if (typeof Map === 'object') {
        expect(xto.instance(new Map())).toBe('Map');
        expect(xto.instance(new Set())).toBe('Set');
        expect(xto.instance(new WeakMap())).toBe('WeakMap');
        expect(xto.instance(new WeakSet())).toBe('WeakSet');
      }
      if (typeof Promise === 'object') {
        expect(xto.instance(new Promise(function(){}))).toBe('Promise');
      }
    });
  });
});
