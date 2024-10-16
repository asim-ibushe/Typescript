"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multi = exports.Substraction = exports.Addition = void 0;
function Addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
exports.Addition = Addition;
function Substraction(no1, no2) {
    var ans = 0;
    ans = no1 - no2;
    return ans;
}
exports.Substraction = Substraction;
//concept about anonymous function
var Multi = function (no1, no2) {
    return no1 * no2;
};
exports.Multi = Multi;
