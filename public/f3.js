"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var f3 = exports.f3 = function f3(a) {
  var b = [];

  for (var i = 0; i < a.length; i++) {
    var obj2 = {};

    for (var key in a[i]) {
      var obj1 = a[i];
      if (obj1.hasOwnProperty(key)) {
        obj2[key] = obj1[key];
      }
    }
    b.push(obj2);
  }
  return b;
};