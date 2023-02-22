/* eslint-env mocha */
const { expect } = require('chai');
const xto = require('../dist/cjs/xto.js');
/**
 * xto.js
 */
describe('Tests for xto', function () {
  describe('xto.isArray', function () {
    it('should return a true if an Array', function () {
      expect(xto.isArray([])).to.equal(true);
      expect(xto.isArray(new Array())).to.equal(true);
      expect(xto.isArray(new Int16Array())).to.equal(false);
      expect(xto.isArray({})).to.equal(false);
      expect(xto.isArray(new Object())).to.equal(false);
      expect(xto.isArray(null)).to.equal(false);
      expect(xto.isArray()).to.equal(false);
      expect(xto.isArray(true)).to.equal(false);
      expect(xto.isArray(Boolean(false))).to.equal(false);
      expect(xto.isArray(10)).to.equal(false);
      expect(xto.isArray(Number(10))).to.equal(false);
      expect(xto.isArray(10n)).to.equal(false);
      expect(xto.isArray(new BigInt64Array(2))).to.equal(false);
      expect(xto.isArray('')).to.equal(false);
      expect(xto.isArray(String(''))).to.equal(false);
      expect(xto.isArray(new Date())).to.equal(false);
      expect(xto.isArray(new Error())).to.equal(false);
      expect(xto.isArray(/test/g)).to.equal(false);
      expect(xto.isArray(function(){})).to.equal(false);
      expect(xto.isArray(new Map())).to.equal(false);
      expect(xto.isArray(new Set())).to.equal(false);
      expect(xto.isArray(new WeakMap())).to.equal(false);
      expect(xto.isArray(new WeakSet())).to.equal(false);
      expect(xto.isArray(new Promise(function(){}))).to.equal(false);
      expect(xto.isArray(Symbol())).to.equal(false);
    });
  });

  describe('xto.isAnyArray', function () {
    it('should return a true if any Array', function () {
      expect(xto.isAnyArray([])).to.equal(true);
      expect(xto.isAnyArray(new Array())).to.equal(true);
      expect(xto.isAnyArray(new Int16Array())).to.equal(true);
      expect(xto.isAnyArray({})).to.equal(false);
      expect(xto.isAnyArray(new Object())).to.equal(false);
      expect(xto.isAnyArray(null)).to.equal(false);
      expect(xto.isAnyArray()).to.equal(false);
      expect(xto.isAnyArray(true)).to.equal(false);
      expect(xto.isAnyArray(Boolean(false))).to.equal(false);
      expect(xto.isAnyArray(10)).to.equal(false);
      expect(xto.isAnyArray(Number(10))).to.equal(false);
      expect(xto.isAnyArray(10n)).to.equal(false);
      expect(xto.isAnyArray(new BigInt64Array(2))).to.equal(true);
      expect(xto.isAnyArray('')).to.equal(false);
      expect(xto.isAnyArray(String(''))).to.equal(false);
      expect(xto.isAnyArray(new Date())).to.equal(false);
      expect(xto.isAnyArray(new Error())).to.equal(false);
      expect(xto.isAnyArray(/test/g)).to.equal(false);
      expect(xto.isAnyArray(function(){})).to.equal(false);
      expect(xto.isAnyArray(new Map())).to.equal(false);
      expect(xto.isAnyArray(new Set())).to.equal(false);
      expect(xto.isAnyArray(new WeakMap())).to.equal(false);
      expect(xto.isAnyArray(new WeakSet())).to.equal(false);
      expect(xto.isAnyArray(new Promise(function(){}))).to.equal(false);
      expect(xto.isAnyArray(Symbol())).to.equal(false);
    });
  });

  describe('xto.isTypedArray', function () {
    it('should return a true if a TypedArray', function () {
      expect(xto.isTypedArray([])).to.equal(false);
      expect(xto.isTypedArray(new Array())).to.equal(false);
      expect(xto.isTypedArray(new Int16Array())).to.equal(true);
      expect(xto.isTypedArray({})).to.equal(false);
      expect(xto.isTypedArray(new Object())).to.equal(false);
      expect(xto.isTypedArray(null)).to.equal(false);
      expect(xto.isTypedArray()).to.equal(false);
      expect(xto.isTypedArray(true)).to.equal(false);
      expect(xto.isTypedArray(Boolean(false))).to.equal(false);
      expect(xto.isTypedArray(10)).to.equal(false);
      expect(xto.isTypedArray(Number(10))).to.equal(false);
      expect(xto.isTypedArray(10n)).to.equal(false);
      expect(xto.isTypedArray(new BigInt64Array(2))).to.equal(true);
      expect(xto.isTypedArray('')).to.equal(false);
      expect(xto.isTypedArray(String(''))).to.equal(false);
      expect(xto.isTypedArray(new Date())).to.equal(false);
      expect(xto.isTypedArray(new Error())).to.equal(false);
      expect(xto.isTypedArray(/test/g)).to.equal(false);
      expect(xto.isTypedArray(function(){})).to.equal(false);
      expect(xto.isTypedArray(new Map())).to.equal(false);
      expect(xto.isTypedArray(new Set())).to.equal(false);
      expect(xto.isTypedArray(new WeakMap())).to.equal(false);
      expect(xto.isTypedArray(new WeakSet())).to.equal(false);
      expect(xto.isTypedArray(new Promise(function(){}))).to.equal(false);
      expect(xto.isTypedArray(Symbol())).to.equal(false);
    });
  });

  describe('xto.isObject', function () {
    it('should return a true if an Object', function () {
      expect(xto.isObject([])).to.equal(false);
      expect(xto.isObject(new Array())).to.equal(false);
      expect(xto.isObject(new Int16Array())).to.equal(false);
      expect(xto.isObject({})).to.equal(true);
      expect(xto.isObject(new Object())).to.equal(true);
      expect(xto.isObject(null)).to.equal(false);
      expect(xto.isObject()).to.equal(false);
      expect(xto.isObject(true)).to.equal(false);
      expect(xto.isObject(Boolean(false))).to.equal(false);
      expect(xto.isObject(10)).to.equal(false);
      expect(xto.isObject(Number(10))).to.equal(false);
      expect(xto.isObject(10n)).to.equal(false);
      expect(xto.isObject(new BigInt64Array(2))).to.equal(false);
      expect(xto.isObject('')).to.equal(false);
      expect(xto.isObject(String(''))).to.equal(false);
      expect(xto.isObject(new Date())).to.equal(false);
      expect(xto.isObject(new Error())).to.equal(false);
      expect(xto.isObject(/test/g)).to.equal(false);
      expect(xto.isObject(function(){})).to.equal(false);
      expect(xto.isObject(new Map())).to.equal(false);
      expect(xto.isObject(new Set())).to.equal(false);
      expect(xto.isObject(new WeakMap())).to.equal(false);
      expect(xto.isObject(new WeakSet())).to.equal(false);
      expect(xto.isObject(new Promise(function(){}))).to.equal(false);
      expect(xto.isObject(Symbol())).to.equal(false);
    });
  });

  describe('xto.isString', function () {
    it('should return a true if a String', function () {
      expect(xto.isString([])).to.equal(false);
      expect(xto.isString(new Array())).to.equal(false);
      expect(xto.isString(new Int16Array())).to.equal(false);
      expect(xto.isString({})).to.equal(false);
      expect(xto.isString(new Object())).to.equal(false);
      expect(xto.isString(null)).to.equal(false);
      expect(xto.isString()).to.equal(false);
      expect(xto.isString(true)).to.equal(false);
      expect(xto.isString(Boolean(false))).to.equal(false);
      expect(xto.isString(10)).to.equal(false);
      expect(xto.isString(Number(10))).to.equal(false);
      expect(xto.isString(10n)).to.equal(false);
      expect(xto.isString(new BigInt64Array(2))).to.equal(false);
      expect(xto.isString('')).to.equal(true);
      expect(xto.isString(String(''))).to.equal(true);
      expect(xto.isString(new Date())).to.equal(false);
      expect(xto.isString(new Error())).to.equal(false);
      expect(xto.isString(/test/g)).to.equal(false);
      expect(xto.isString(function(){})).to.equal(false);
      expect(xto.isString(new Map())).to.equal(false);
      expect(xto.isString(new Set())).to.equal(false);
      expect(xto.isString(new WeakMap())).to.equal(false);
      expect(xto.isString(new WeakSet())).to.equal(false);
      expect(xto.isString(new Promise(function(){}))).to.equal(false);
      expect(xto.isString(Symbol())).to.equal(false);
    });
  });

  describe('xto.isDate', function () {
    it('should return a true if a Date', function () {
      expect(xto.isDate([])).to.equal(false);
      expect(xto.isDate(new Array())).to.equal(false);
      expect(xto.isDate(new Int16Array())).to.equal(false);
      expect(xto.isDate({})).to.equal(false);
      expect(xto.isDate(new Object())).to.equal(false);
      expect(xto.isDate(null)).to.equal(false);
      expect(xto.isDate()).to.equal(false);
      expect(xto.isDate(true)).to.equal(false);
      expect(xto.isDate(Boolean(false))).to.equal(false);
      expect(xto.isDate(10)).to.equal(false);
      expect(xto.isDate(Number(10))).to.equal(false);
      expect(xto.isDate(10n)).to.equal(false);
      expect(xto.isDate(new BigInt64Array(2))).to.equal(false);
      expect(xto.isDate('')).to.equal(false);
      expect(xto.isDate(String(''))).to.equal(false);
      expect(xto.isDate(new Date())).to.equal(true);
      expect(xto.isDate(new Error())).to.equal(false);
      expect(xto.isDate(/test/g)).to.equal(false);
      expect(xto.isDate(function(){})).to.equal(false);
      expect(xto.isDate(new Map())).to.equal(false);
      expect(xto.isDate(new Set())).to.equal(false);
      expect(xto.isDate(new WeakMap())).to.equal(false);
      expect(xto.isDate(new WeakSet())).to.equal(false);
      expect(xto.isDate(new Promise(function(){}))).to.equal(false);
      expect(xto.isDate(Symbol())).to.equal(false);
    });
  });

  describe('xto.isRegExp', function () {
    it('should return a true if a RegExp', function () {
      expect(xto.isRegExp([])).to.equal(false);
      expect(xto.isRegExp(new Array())).to.equal(false);
      expect(xto.isRegExp(new Int16Array())).to.equal(false);
      expect(xto.isRegExp({})).to.equal(false);
      expect(xto.isRegExp(new Object())).to.equal(false);
      expect(xto.isRegExp(null)).to.equal(false);
      expect(xto.isRegExp()).to.equal(false);
      expect(xto.isRegExp(true)).to.equal(false);
      expect(xto.isRegExp(Boolean(false))).to.equal(false);
      expect(xto.isRegExp(10)).to.equal(false);
      expect(xto.isRegExp(Number(10))).to.equal(false);
      expect(xto.isRegExp(10n)).to.equal(false);
      expect(xto.isRegExp(new BigInt64Array(2))).to.equal(false);
      expect(xto.isRegExp('')).to.equal(false);
      expect(xto.isRegExp(String(''))).to.equal(false);
      expect(xto.isRegExp(new Date())).to.equal(false);
      expect(xto.isRegExp(new Error())).to.equal(false);
      expect(xto.isRegExp(/test/g)).to.equal(true);
      expect(xto.isRegExp(new RegExp('test', 'g'))).to.equal(true);
      expect(xto.isRegExp(function(){})).to.equal(false);
      expect(xto.isRegExp(new Map())).to.equal(false);
      expect(xto.isRegExp(new Set())).to.equal(false);
      expect(xto.isRegExp(new WeakMap())).to.equal(false);
      expect(xto.isRegExp(new WeakSet())).to.equal(false);
      expect(xto.isRegExp(new Promise(function(){}))).to.equal(false);
      expect(xto.isRegExp(Symbol())).to.equal(false);
    });
  });

  describe('xto.isSymbol', function () {
    it('should return a true if a Symbol', function () {
      expect(xto.isSymbol([])).to.equal(false);
      expect(xto.isSymbol(new Array())).to.equal(false);
      expect(xto.isSymbol(new Int16Array())).to.equal(false);
      expect(xto.isSymbol({})).to.equal(false);
      expect(xto.isSymbol(new Object())).to.equal(false);
      expect(xto.isSymbol(null)).to.equal(false);
      expect(xto.isSymbol()).to.equal(false);
      expect(xto.isSymbol(true)).to.equal(false);
      expect(xto.isSymbol(Boolean(false))).to.equal(false);
      expect(xto.isSymbol(10)).to.equal(false);
      expect(xto.isSymbol(Number(10))).to.equal(false);
      expect(xto.isSymbol(10n)).to.equal(false);
      expect(xto.isSymbol(new BigInt64Array(2))).to.equal(false);
      expect(xto.isSymbol('')).to.equal(false);
      expect(xto.isSymbol(String(''))).to.equal(false);
      expect(xto.isSymbol(new Date())).to.equal(false);
      expect(xto.isSymbol(new Error())).to.equal(false);
      expect(xto.isSymbol(/test/g)).to.equal(false);
      expect(xto.isSymbol(function () { })).to.equal(false);
      expect(xto.isSymbol(new Map())).to.equal(false);
      expect(xto.isSymbol(new Set())).to.equal(false);
      expect(xto.isSymbol(new WeakMap())).to.equal(false);
      expect(xto.isSymbol(new WeakSet())).to.equal(false);
      expect(xto.isSymbol(new Promise(function () { }))).to.equal(false);
      expect(xto.isSymbol(Symbol())).to.equal(true);
    });
  });

  describe('xto.isFunction', function () {
    it('should return a true if a Function', function () {
      expect(xto.isFunction([])).to.equal(false);
      expect(xto.isFunction(new Array())).to.equal(false);
      expect(xto.isFunction(new Int16Array())).to.equal(false);
      expect(xto.isFunction({})).to.equal(false);
      expect(xto.isFunction(new Object())).to.equal(false);
      expect(xto.isFunction(null)).to.equal(false);
      expect(xto.isFunction()).to.equal(false);
      expect(xto.isFunction(true)).to.equal(false);
      expect(xto.isFunction(Boolean(false))).to.equal(false);
      expect(xto.isFunction(10)).to.equal(false);
      expect(xto.isFunction(Number(10))).to.equal(false);
      expect(xto.isFunction(10n)).to.equal(false);
      expect(xto.isFunction(new BigInt64Array(2))).to.equal(false);
      expect(xto.isFunction('')).to.equal(false);
      expect(xto.isFunction(String(''))).to.equal(false);
      expect(xto.isFunction(new Date())).to.equal(false);
      expect(xto.isFunction(new Error())).to.equal(false);
      expect(xto.isFunction(/test/g)).to.equal(false);
      expect(xto.isFunction(function(){})).to.equal(true);
      expect(xto.isFunction(new Map())).to.equal(false);
      expect(xto.isFunction(new Set())).to.equal(false);
      expect(xto.isFunction(new WeakMap())).to.equal(false);
      expect(xto.isFunction(new WeakSet())).to.equal(false);
      expect(xto.isFunction(new Promise(function () { }))).to.equal(false);
      expect(xto.isFunction(Symbol())).to.equal(false);
    });
  });

  describe('xto.isBoolean', function () {
    it('should return a true if a Boolean', function () {
      expect(xto.isBoolean([])).to.equal(false);
      expect(xto.isBoolean(new Array())).to.equal(false);
      expect(xto.isBoolean(new Int16Array())).to.equal(false);
      expect(xto.isBoolean({})).to.equal(false);
      expect(xto.isBoolean(new Object())).to.equal(false);
      expect(xto.isBoolean(null)).to.equal(false);
      expect(xto.isBoolean()).to.equal(false);
      expect(xto.isBoolean(true)).to.equal(true);
      expect(xto.isBoolean(Boolean(false))).to.equal(true);
      expect(xto.isBoolean(10)).to.equal(false);
      expect(xto.isBoolean(Number(10))).to.equal(false);
      expect(xto.isBoolean(10n)).to.equal(false);
      expect(xto.isBoolean(new BigInt64Array(2))).to.equal(false);
      expect(xto.isBoolean('')).to.equal(false);
      expect(xto.isBoolean(String(''))).to.equal(false);
      expect(xto.isBoolean(new Date())).to.equal(false);
      expect(xto.isBoolean(new Error())).to.equal(false);
      expect(xto.isBoolean(/test/g)).to.equal(false);
      expect(xto.isBoolean(function(){})).to.equal(false);
      expect(xto.isBoolean(new Map())).to.equal(false);
      expect(xto.isBoolean(new Set())).to.equal(false);
      expect(xto.isBoolean(new WeakMap())).to.equal(false);
      expect(xto.isBoolean(new WeakSet())).to.equal(false);
      expect(xto.isBoolean(new Promise(function () { }))).to.equal(false);
      expect(xto.isBoolean(Symbol())).to.equal(false);
    });
  });

  describe('xto.isNumber', function () {
    it('should return a true if a Number', function () {
      expect(xto.isNumber([])).to.equal(false);
      expect(xto.isNumber(new Array())).to.equal(false);
      expect(xto.isNumber(new Int16Array())).to.equal(false);
      expect(xto.isNumber({})).to.equal(false);
      expect(xto.isNumber(new Object())).to.equal(false);
      expect(xto.isNumber(null)).to.equal(false);
      expect(xto.isNumber()).to.equal(false);
      expect(xto.isNumber(true)).to.equal(false);
      expect(xto.isNumber(Boolean(false))).to.equal(false);
      expect(xto.isNumber(10)).to.equal(true);
      expect(xto.isNumber(Number(10))).to.equal(true);
      expect(xto.isNumber(NaN)).to.equal(true);
      expect(xto.isNumber(10n)).to.equal(false);
      expect(xto.isNumber(new BigInt64Array(2))).to.equal(false);
      expect(xto.isNumber('')).to.equal(false);
      expect(xto.isNumber(String(''))).to.equal(false);
      expect(xto.isNumber(new Date())).to.equal(false);
      expect(xto.isNumber(new Error())).to.equal(false);
      expect(xto.isNumber(/test/g)).to.equal(false);
      expect(xto.isNumber(function(){})).to.equal(false);
      expect(xto.isNumber(new Map())).to.equal(false);
      expect(xto.isNumber(new Set())).to.equal(false);
      expect(xto.isNumber(new WeakMap())).to.equal(false);
      expect(xto.isNumber(new WeakSet())).to.equal(false);
      expect(xto.isNumber(new Promise(function () { }))).to.equal(false);
      expect(xto.isNumber(Symbol())).to.equal(false);
    });
  });

  describe('xto.isNumeric', function () {
    it('should return a true if a Number or BigInt', function () {
      expect(xto.isNumeric([])).to.equal(false);
      expect(xto.isNumeric(new Array())).to.equal(false);
      expect(xto.isNumeric(new Int16Array())).to.equal(false);
      expect(xto.isNumeric({})).to.equal(false);
      expect(xto.isNumeric(new Object())).to.equal(false);
      expect(xto.isNumeric(null)).to.equal(false);
      expect(xto.isNumeric()).to.equal(false);
      expect(xto.isNumeric(true)).to.equal(false);
      expect(xto.isNumeric(Boolean(false))).to.equal(false);
      expect(xto.isNumeric(10)).to.equal(true);
      expect(xto.isNumeric(Number(10))).to.equal(true);
      expect(xto.isNumeric(NaN)).to.equal(true);
      expect(xto.isNumeric(10n)).to.equal(true);
      expect(xto.isNumeric(new BigInt64Array(2))).to.equal(false);
      expect(xto.isNumeric('')).to.equal(false);
      expect(xto.isNumeric(String(''))).to.equal(false);
      expect(xto.isNumeric(new Date())).to.equal(false);
      expect(xto.isNumeric(new Error())).to.equal(false);
      expect(xto.isNumeric(/test/g)).to.equal(false);
      expect(xto.isNumeric(function () { })).to.equal(false);
      expect(xto.isNumeric(new Map())).to.equal(false);
      expect(xto.isNumeric(new Set())).to.equal(false);
      expect(xto.isNumeric(new WeakMap())).to.equal(false);
      expect(xto.isNumeric(new WeakSet())).to.equal(false);
      expect(xto.isNumeric(new Promise(function () { }))).to.equal(false);
      expect(xto.isNumeric(Symbol())).to.equal(false);
    });
  });

  describe('xto.isError', function () {
    it('should return a true if an Error', function () {
      expect(xto.isError([])).to.equal(false);
      expect(xto.isError(new Array())).to.equal(false);
      expect(xto.isError(new Int16Array())).to.equal(false);
      expect(xto.isError({})).to.equal(false);
      expect(xto.isError(new Object())).to.equal(false);
      expect(xto.isError(null)).to.equal(false);
      expect(xto.isError()).to.equal(false);
      expect(xto.isError(true)).to.equal(false);
      expect(xto.isError(Boolean(false))).to.equal(false);
      expect(xto.isError(10)).to.equal(false);
      expect(xto.isError(Number(10))).to.equal(false);
      expect(xto.isError(10n)).to.equal(false);
      expect(xto.isError(new BigInt64Array(2))).to.equal(false);
      expect(xto.isError('')).to.equal(false);
      expect(xto.isError(String(''))).to.equal(false);
      expect(xto.isError(new Date())).to.equal(false);
      expect(xto.isError(new Error())).to.equal(true);
      expect(xto.isError(/test/g)).to.equal(false);
      expect(xto.isError(function(){})).to.equal(false);
      expect(xto.isError(new Map())).to.equal(false);
      expect(xto.isError(new Set())).to.equal(false);
      expect(xto.isError(new WeakMap())).to.equal(false);
      expect(xto.isError(new WeakSet())).to.equal(false);
      expect(xto.isError(new Promise(function () { }))).to.equal(false);
      expect(xto.isError(Symbol())).to.equal(false);
    });
  });

  describe('xto.isNull', function () {
    it('should return a true if a Null', function () {
      expect(xto.isNull([])).to.equal(false);
      expect(xto.isNull(new Array())).to.equal(false);
      expect(xto.isNull(new Int16Array())).to.equal(false);
      expect(xto.isNull({})).to.equal(false);
      expect(xto.isNull(new Object())).to.equal(false);
      expect(xto.isNull(null)).to.equal(true);
      expect(xto.isNull()).to.equal(false);
      expect(xto.isNull(true)).to.equal(false);
      expect(xto.isNull(Boolean(false))).to.equal(false);
      expect(xto.isNull(10)).to.equal(false);
      expect(xto.isNull(Number(10))).to.equal(false);
      expect(xto.isNull(10n)).to.equal(false);
      expect(xto.isNull(new BigInt64Array(2))).to.equal(false);
      expect(xto.isNull('')).to.equal(false);
      expect(xto.isNull(String(''))).to.equal(false);
      expect(xto.isNull(new Date())).to.equal(false);
      expect(xto.isNull(new Error())).to.equal(false);
      expect(xto.isNull(/test/g)).to.equal(false);
      expect(xto.isNull(function(){})).to.equal(false);
      expect(xto.isNull(new Map())).to.equal(false);
      expect(xto.isNull(new Set())).to.equal(false);
      expect(xto.isNull(new WeakMap())).to.equal(false);
      expect(xto.isNull(new WeakSet())).to.equal(false);
      expect(xto.isNull(new Promise(function () { }))).to.equal(false);
      expect(xto.isNull(Symbol())).to.equal(false);
    });
  });

  describe('xto.isUndefined', function () {
    it('should return a true if Undefined', function () {
      expect(xto.isUndefined([])).to.equal(false);
      expect(xto.isUndefined(new Array())).to.equal(false);
      expect(xto.isUndefined(new Int16Array())).to.equal(false);
      expect(xto.isUndefined({})).to.equal(false);
      expect(xto.isUndefined(new Object())).to.equal(false);
      expect(xto.isUndefined(null)).to.equal(false);
      expect(xto.isUndefined()).to.equal(true);
      expect(xto.isUndefined(true)).to.equal(false);
      expect(xto.isUndefined(Boolean(false))).to.equal(false);
      expect(xto.isUndefined(10)).to.equal(false);
      expect(xto.isUndefined(Number(10))).to.equal(false);
      expect(xto.isUndefined(10n)).to.equal(false);
      expect(xto.isUndefined(new BigInt64Array(2))).to.equal(false);
      expect(xto.isUndefined('')).to.equal(false);
      expect(xto.isUndefined(String(''))).to.equal(false);
      expect(xto.isUndefined(new Date())).to.equal(false);
      expect(xto.isUndefined(new Error())).to.equal(false);
      expect(xto.isUndefined(/test/g)).to.equal(false);
      expect(xto.isUndefined(function(){})).to.equal(false);
      expect(xto.isUndefined(new Map())).to.equal(false);
      expect(xto.isUndefined(new Set())).to.equal(false);
      expect(xto.isUndefined(new WeakMap())).to.equal(false);
      expect(xto.isUndefined(new WeakSet())).to.equal(false);
      expect(xto.isUndefined(new Promise(function () { }))).to.equal(false);
      expect(xto.isUndefined(Symbol())).to.equal(false);
    });
  });

  describe('xto.isPromise', function () {
    it('should return a true if a Promise', function () {
      expect(xto.isPromise([])).to.equal(false);
      expect(xto.isPromise(new Array())).to.equal(false);
      expect(xto.isPromise(new Int16Array())).to.equal(false);
      expect(xto.isPromise({})).to.equal(false);
      expect(xto.isPromise(new Object())).to.equal(false);
      expect(xto.isPromise(null)).to.equal(false);
      expect(xto.isPromise()).to.equal(false);
      expect(xto.isPromise(true)).to.equal(false);
      expect(xto.isPromise(Boolean(false))).to.equal(false);
      expect(xto.isPromise(10)).to.equal(false);
      expect(xto.isPromise(Number(10))).to.equal(false);
      expect(xto.isPromise(10n)).to.equal(false);
      expect(xto.isPromise(new BigInt64Array(2))).to.equal(false);
      expect(xto.isPromise('')).to.equal(false);
      expect(xto.isPromise(String(''))).to.equal(false);
      expect(xto.isPromise(new Date())).to.equal(false);
      expect(xto.isPromise(new Error())).to.equal(false);
      expect(xto.isPromise(/test/g)).to.equal(false);
      expect(xto.isPromise(function(){})).to.equal(false);
      expect(xto.isPromise(new Map())).to.equal(false);
      expect(xto.isPromise(new Set())).to.equal(false);
      expect(xto.isPromise(new WeakMap())).to.equal(false);
      expect(xto.isPromise(new WeakSet())).to.equal(false);
      expect(xto.isPromise(new Promise(function () { }))).to.equal(true);
      expect(xto.isPromise(Symbol())).to.equal(false);
    });
  });

  describe('xto.typeof', function () {
    it('should return proper type', function () {
      class TestObj {
        constructor() {
          this.val = 10;
        }
      }
      expect(xto.typeof([])).to.equal('array');
      expect(xto.typeof(new Array())).to.equal('array');
      expect(xto.typeof(new Int16Array())).to.equal('int16array');
      expect(xto.typeof({})).to.equal('object');
      expect(xto.typeof(new Object())).to.equal('object');
      expect(xto.typeof(null)).to.equal('null');
      expect(xto.typeof()).to.equal('undefined');
      expect(xto.typeof(true)).to.equal('boolean');
      expect(xto.typeof(Boolean(false))).to.equal('boolean');
      expect(xto.typeof(10)).to.equal('number');
      expect(xto.typeof(Number(10))).to.equal('number');
      expect(xto.typeof(10n)).to.equal('bigint');
      expect(xto.typeof(new BigInt64Array(2))).to.equal('bigint64array');
      expect(xto.typeof('')).to.equal('string');
      expect(xto.typeof(String(''))).to.equal('string');
      expect(xto.typeof(new Date())).to.equal('date');
      expect(xto.typeof(new Error())).to.equal('error');
      expect(xto.typeof(/test/g)).to.equal('regexp');
      expect(xto.typeof(function(){})).to.equal('function');
      expect(xto.typeof(new TestObj())).to.equal('object');
      expect(xto.typeof(new Map())).to.equal('map');
      expect(xto.typeof(new Set())).to.equal('set');
      expect(xto.typeof(new WeakMap())).to.equal('weakmap');
      expect(xto.typeof(new WeakSet())).to.equal('weakset');
      expect(xto.typeof(new Promise(function () { }))).to.equal('promise');
      expect(xto.typeof(Symbol())).to.equal('symbol');
    });
  });

  describe('xto.instance', function () {
    it('should return proper instance', function () {
      function TestObj() {
        this.val = 10;
      }
      expect(xto.instance([])).to.equal('Array');
      expect(xto.instance(new Array())).to.equal('Array');
      expect(xto.instance(new Int16Array())).to.equal('Int16Array');
      expect(xto.instance({})).to.equal('Object');
      expect(xto.instance(new Object())).to.equal('Object');
      expect(xto.instance(null)).to.equal('Null');
      expect(xto.instance()).to.equal('Undefined');
      expect(xto.instance(true)).to.equal('Boolean');
      expect(xto.instance(Boolean(false))).to.equal('Boolean');
      expect(xto.instance(10)).to.equal('Number');
      expect(xto.instance(Number(10))).to.equal('Number');
      expect(xto.instance(10n)).to.equal('BigInt');
      expect(xto.instance(new BigInt64Array(2))).to.equal('BigInt64Array');
      expect(xto.instance('')).to.equal('String');
      expect(xto.instance(String(''))).to.equal('String');
      expect(xto.instance(new Date())).to.equal('Date');
      expect(xto.instance(new Error())).to.equal('Error');
      expect(xto.instance(/test/g)).to.equal('RegExp');
      expect(xto.instance(function(){})).to.equal('Function');
      expect(xto.instance(new TestObj())).to.equal('TestObj');
      expect(xto.instance(new Map())).to.equal('Map');
      expect(xto.instance(new Set())).to.equal('Set');
      expect(xto.instance(new WeakMap())).to.equal('WeakMap');
      expect(xto.instance(new WeakSet())).to.equal('WeakSet');
      expect(xto.instance(new Promise(function () { }))).to.equal('Promise');
      expect(xto.instance(Symbol())).to.equal('Symbol');
    });
  });

  describe('xto.instances', function () {
    it('should return proper instances', function () {
      class TestObj {
        constructor() {
          this.val = 10;
        }
      }
      expect(xto.instances([])).to.eql(['Array', 'Object']);
      expect(xto.instances(new Array())).to.eql(['Array', 'Object']);
      expect(xto.instances(new Int16Array())).to.eql(['Int16Array', 'TypedArray', 'Object']);
      expect(xto.instances({})).to.eql(['Object']);
      expect(xto.instances(new Object())).to.eql(['Object']);
      expect(xto.instances(null)).to.eql(['Null']);
      expect(xto.instances()).to.eql(['Undefined']);
      expect(xto.instances(true)).to.eql(['Boolean', 'Object']);
      expect(xto.instances(Boolean(false))).to.eql(['Boolean', 'Object']);
      expect(xto.instances(10)).to.eql(['Number', 'Object']);
      expect(xto.instances(Number(10))).to.eql(['Number', 'Object']);
      expect(xto.instances(10n)).to.eql(['BigInt', 'Object']);
      expect(xto.instances(new BigInt64Array(2))).to.eql(['BigInt64Array', 'TypedArray', 'Object']);
      expect(xto.instances('')).to.eql(['String', 'Object']);
      expect(xto.instances(String(''))).to.eql(['String', 'Object']);
      expect(xto.instances(new Date())).to.eql(['Date', 'Object']);
      expect(xto.instances(new Error())).to.eql(['Error', 'Object']);
      expect(xto.instances(/test/g)).to.eql(['RegExp', 'Object']);
      expect(xto.instances(function(){})).to.eql(['Function', 'Object']);
      expect(xto.instances(new TestObj())).to.eql(['TestObj', 'Object']);
      expect(xto.instances(new Map())).to.eql(['Map', 'Object']);
      expect(xto.instances(new Set())).to.eql(['Set', 'Object']);
      expect(xto.instances(new WeakMap())).to.eql(['WeakMap', 'Object']);
      expect(xto.instances(new WeakSet())).to.eql(['WeakSet', 'Object']);
      expect(xto.instances(new Promise(function () { }))).to.eql(['Promise', 'Object']);
      expect(xto.instances(Symbol())).to.eql(['Symbol', 'Object']);
    });
  });
});
