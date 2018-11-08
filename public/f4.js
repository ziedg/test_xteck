"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var f4 = exports.f4 = function f4(cb) {

    var permission = true;

    return function () {

        permission && setTimeout(function () {
            cb();
            permission = true;
        }, 300);
        permission = false;
    };
};