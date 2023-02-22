let x = {};
let t = '@,Int8@,Uint8@,Uint8Clamped@,Int16@,Uint16@,Int32@,Uint32@,BigInt64@,BigUint64@,Float32@,Float64@,@Buffer,Map,WeakMap,Set,WeakSet,DataView,Object,Promise,String,Date,RegExp,Function,Boolean,Number,Error,Null,Undefined,BigInt,Symbol'.replace(/@/g,'Array').split(',');

let getNullOrUndefined = val => (val === undefined)?'Undefined':(val === null)?'Null':0;

let getArrayType = val => {
  let ret = x.typeof(val);
  return ret === 'array' ? ret : ret.slice(-5) === 'array' ? 'typedarray' : false;
}

let getInstances = val => {
  let proto = Object.getPrototypeOf(val);
  let ret = [proto.constructor.name];
  return (ret[0] === 'Object') ? ret : ret.concat(getInstances(proto));
}

x.typeof = val => (getNullOrUndefined(val) || Object.prototype.toString.call(val).slice(8, -1)).toLowerCase();
x.isAnyArray = val => !!getArrayType(val);
x.isTypedArray = val => getArrayType(val) === 'typedarray';
x.isNumeric = val => ['number', 'bigint'].includes(x.typeof(val));
x.instance = val => getNullOrUndefined(val) || val.constructor.name;
x.instances = val => {
  let ret = getNullOrUndefined(val);
  return ret ? [ret] : getInstances(val);
};

t.forEach(type => {
  let lcType = type.toLowerCase();
  x[`is${type}`] = val => x.typeof(val) === lcType;
});
