'use strict';

var _solutions = require('./solutions');

var cb = function cb() {
   console.log("I'm cb");
};
var f = (0, _solutions.f4)(cb);f();
setTimeout(function () {
   f(cb);
}, 200);

setTimeout(function () {
   f(cb);
}, 400);

// setTimeout(()=>{
//    f(cb)
// },600)

setTimeout(function () {
   f(cb);
}, 700);