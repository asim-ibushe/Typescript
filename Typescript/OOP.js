//class layout using declaration
var Arithematic = /** @class */ (function () {
    //special type of member function used to init data members
    function Arithematic(x, y) {
        this.No1 = x;
        this.No2 = y;
        this.ans = 0;
    }
    //Behaviour or member function
    Arithematic.prototype.Addition = function () {
        this.ans = this.No1 + this.No2;
        return this.ans;
    };
    Arithematic.prototype.Substraction = function () {
        this.ans = this.No1 - this.No2;
        return this.ans;
    };
    return Arithematic;
}());
//object creation and actual memory allocation
var obj1 = new Arithematic(100, 11.30);
var obj2 = new Arithematic(20, 11);
console.log(typeof (obj1));
console.log("Addition of first person is:", obj1.Addition());
console.log("Addition of second person is:", obj2.Addition());
console.log("Balance check:", obj1.ans);
console.log("Balance check:", obj2.ans);
