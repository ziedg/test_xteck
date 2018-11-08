"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var f2 = exports.f2 = function f2(str) {
  var i = 0;
  var j = i;
  var subNumber = "";
  var result = [];
  while (i < str.length) {
    subNumber = "";
    if (str[i] === "-" || str[i].match(/[0-9]/)) {

      j = i + 1;
      while (i < str.length - 1 && str[j].match(/[0-9,.]/)) {
        j++;
      }
      subNumber = str.substring(i, j);
      !!parseFloat(subNumber) && result.push(parseFloat(subNumber));
    }

    i += subNumber.length > 0 ? subNumber.length + 1 : 1;
  }
  return result;
};