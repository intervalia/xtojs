/* v1.1.0|(c)2016 Michael G Collins|https://github.com/intervalia/xtojs */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.xto = factory();
  }
}(this, function () {
  var array = 'array';
  var typedArray = 'typedarray';
  var types = 'Int8@,Uint8@,Uint8Clamped@,Int16@,Uint16@,Int32@,Uint32@,Float32@,Float64@,@Buffer,Map,WeakMap,Set,WeakSet,DataView,Object,Promise,String,Date,RegExp,Function,Boolean,Number,Error,Null,Undefined'.replace(/@/g,'Array').split(',');
  function getNullOrUndefined(elem) {
    return (elem === undefined)?'undefined':(elem === null)?'null':0;
  }

  function getArrayType(elem) {
    var ret = xto.typeof(elem);
    return (ret !== array && ret.slice(-5) === array) ? typedArray : ret;
  }

  var xto = {
    typeof: function(elem) {
      return getNullOrUndefined(elem) || Object.prototype.toString.call(elem).slice(8, -1).toLowerCase();
    },
    instance: function(elem) {
      return getNullOrUndefined(elem) || elem.constructor.name;
    },
    isArray: function(elem) {
      var ret = getArrayType(elem);
      return (ret === array || ret === typedArray);
    },
    isTypedArray: function(elem) {
      return (getArrayType(elem) === typedArray);
    }
  };

  types.forEach(
    function(type) {
      xto['is' + type] = (function (self) {
        self = self.toLowerCase();
        return function (elem) {
          return xto.typeof(elem) === self;
        };
      })(type);
    }
  );

  return xto;
}));
