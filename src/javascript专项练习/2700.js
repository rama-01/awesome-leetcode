"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objDiff = function (o1, o2) {
    var o = {};
    var k2 = Object.keys(o2);
    // debugger;
    for (var key in o1) {
        if (k2.includes(key) && o1[key] !== o2[key]) {
            if (typeof o1[key] === 'object' || typeof o2[key] === 'object') {
                objDiff(o1[key], o2[key]);
            }
            o[key] = [o1[key], o2[key]];
        }
    }
    return o;
};
var obj1 = {
    a: 5,
    v: 6,
    z: [1, 2, 4, [2, 5, 7]]
};
var obj2 = {
    a: 5,
    v: 7,
    z: [1, 2, 3, [1]]
};
console.log(obj1, obj2);
