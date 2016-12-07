/* v2.0.0|(c)2016 Michael G Collins|https://github.com/intervalia/xtojs */
(function (root, factory) {
  if (typeof define == 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports == 'object') {
    module.exports = factory();
  } else {
    root.xto = factory();
  }
}(this, function (undefined) {
  var array = 'array';
  var typedArray = 'typedarray';
  var types = '@,Int8@,Uint8@,Uint8Clamped@,Int16@,Uint16@,Int32@,Uint32@,Float32@,Float64@,@Buffer,Map,WeakMap,Set,WeakSet,DataView,Object,Promise,String,Date,RegExp,Function,Boolean,Number,Error,Null,Undefined'.replace(/@/g,'Array').split(',');
  function getNullOrUndefined(elem) {
    return (elem === undefined)?'Undefined':(elem === null)?'Null':0;
  }

  function getArrayType(elem) {
    var ret = xto.typeof(elem);
    return ret == array ? ret : ret.slice(-5) == array ? typedArray : false;
  }

  function getPrototypeOf(elem) {
    try {
      return Object.getPrototypeOf(elem);
    }
    catch(ex) {
      // Handle older browsers that do not coerce primatives to their objects.
      return elem.__proto__; // jshint ignore:line
    }
  }

  function getInstances(elem) {
    elem = getPrototypeOf(elem);
    var ret = [elem.constructor.name];
    if (ret[0] != 'Object') {
      ret = ret.concat(getInstances(elem));
    }

    return ret;
  }

  var xto = {// jshint ignore:line
    typeof: function(elem) {
      return (getNullOrUndefined(elem) || Object.prototype.toString.call(elem).slice(8, -1)).toLowerCase();
    },
    instance: function(elem) {
      return getNullOrUndefined(elem) || elem.constructor.name;
    },
    instances: function(elem) {
      var ret = getNullOrUndefined(elem);
      return ret ? [ret] : getInstances(elem);
    },
    isAnyArray: function(elem) {
      return !!getArrayType(elem);
    },
    isTypedArray: function(elem) {
      return getArrayType(elem) == typedArray;
    }
  };

  types.forEach(
    function(type) {
      xto['is' + type] = (function (self) {
        self = self.toLowerCase();
        return function (elem) {
          return xto.typeof(elem) == self;
        };
      })(type);
    }
  );

  return xto;
}));
