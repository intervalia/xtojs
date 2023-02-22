/*v2.1.0|(c)2016-2023 Michael G Collins|https://github.com/intervalia/xtojs*/
let t={},e="@,Int8@,Uint8@,Uint8Clamped@,Int16@,Uint16@,Int32@,Uint32@,BigInt64@,BigUint64@,Float32@,Float64@,@Buffer,Map,WeakMap,Set,WeakSet,DataView,Object,Promise,String,Date,RegExp,Function,Boolean,Number,Error,Null,Undefined,BigInt,Symbol".replace(/@/g,"Array").split(","),r=t=>void 0===t?"Undefined":null===t?"Null":0,n=e=>{let r=t.typeof(e)
return"array"===r?r:"array"===r.slice(-5)&&"typedarray"},a=t=>{let e=Object.getPrototypeOf(t),r=[e.constructor.name]
return"Object"===r[0]?r:r.concat(a(e))}
t.typeof=t=>(r(t)||Object.prototype.toString.call(t).slice(8,-1)).toLowerCase(),t.isAnyArray=t=>!!n(t),t.isTypedArray=t=>"typedarray"===n(t),t.isNumeric=e=>["number","bigint"].includes(t.typeof(e)),t.instance=t=>r(t)||t.constructor.name,t.instances=t=>{let e=r(t)
return e?[e]:a(t)},e.forEach((e=>{let r=e.toLowerCase()
t["is"+e]=e=>t.typeof(e)===r}))
export default t
