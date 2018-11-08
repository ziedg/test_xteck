"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var f1 = exports.f1 = function f1(a, b) {
    var result = [];
    var nb = 0;
    for (var str1 in a) {
        for (var str2 in b) {
            if (a[str1] === b[str2]) {
                nb++;
            }
        }
        result.push(nb);
        nb = 0;
    }
    return result;
};