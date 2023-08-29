/*v2.2.0|(c)2016-2023 Michael G Collins|https://github.com/intervalia/xtojs*/
let e={},t="@,Int8@,Uint8@,Uint8Clamped@,Int16@,Uint16@,Int32@,Uint32@,BigInt64@,BigUint64@,Float32@,Float64@,@Buffer,Map,WeakMap,Set,WeakSet,DataView,Object,Promise,String,Date,RegExp,Function,Boolean,Number,Error,Null,Undefined,BigInt,Symbol".replace(/@/g,"Array").split(","),r=e=>void 0===e?"Undefined":null===e?"Null":0,n=t=>{let r=e.typeof(t)
return"array"===r?r:"array"===r.slice(-5)&&"typedarray"},a=e=>{let t=Object.getPrototypeOf(e),r=[t.constructor.name]
return"Object"===r[0]?r:r.concat(a(t))}
e.typeof=e=>(r(e)||Object.prototype.toString.call(e).slice(8,-1)).toLowerCase(),e.isAnyArray=e=>!!n(e),e.isTypedArray=e=>"typedarray"===n(e),e.isNumeric=t=>["number","bigint"].includes(e.typeof(t)),e.instance=e=>r(e)||e.constructor.name,e.instances=e=>{let t=r(e)
return t?[t]:a(e)},t.forEach((t=>{let r=t.toLowerCase()
e["is"+t]=t=>e.typeof(t)===r})),module.exports=e
