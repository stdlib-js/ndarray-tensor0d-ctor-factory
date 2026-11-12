"use strict";var g=function(u,e){return function(){try{return e||u((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var f=g(function(T,o){
var s=require('@stdlib/assert-is-arraybuffer/dist'),w=require('@stdlib/assert-is-function/dist'),c=require('@stdlib/ndarray-base-assert-is-data-type/dist'),y=require('@stdlib/ndarray-tensor0d-ctor/dist').factory,a=require('@stdlib/error-tools-fmtprodmsg/dist');function p(u,e,t){var n;if(!c(u))throw new TypeError(a('nullH9',u));if(!w(t))throw new TypeError(a('null3N',t));return n=y(u),m;function m(r){var i=arguments.length;if(i===0)return new n(e);if(i===1)return t(r)||s(r)?new n(r):new n(e,r);if(i===2){if(!t(r)&&!s(r))throw new TypeError(a("invalid argument. First argument must be either an ArrayBuffer or a valid scalar value. Value: `%s`.",r));return new n(r,arguments[1])}return new n(r,arguments[1],arguments[2])}}o.exports=p
});var h=f();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
