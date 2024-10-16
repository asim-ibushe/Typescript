"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//multiple object module import
var Server_1 = require("./Server");
main();
function main() {
    var x = 11;
    var y = 20;
    var ret = 0;
    ret = (0, Server_1.Addition)(x, y);
    console.log("Addition of the two number is as follow:", ret);
    ret = (0, Server_1.Substraction)(x, y);
    console.log("Substraction of the two number is as follow:", ret);
    //concept of alias or reference using object Multi 
    console.log("Multiplication of two number is:", (0, Server_1.Multi)(3, 4));
}
