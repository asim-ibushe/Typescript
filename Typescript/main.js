var Base = /** @class */ (function () {
    function Base(x, y) {
        console.log("Base class constructor");
        this.no1 = x;
        this.no2 = y;
    }
    Base.prototype.fun = function () {
        console.log("Inside fun of base");
    };
    return Base;
}());
var O1 = new Base(11, 12);
console.log(O1.no1);
console.log(O1.no2);
var bobj2 = new Base(50, 60);
console.log(bobj2.no1);
console.log(bobj2.no2);
