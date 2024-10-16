class Base
{
    no1:number;
    no2:number;
    constructor(x:number, y:number)
    {
        console.log("Base class constructor")
        this.no1=x
        this.no2=y
    }

    fun()
    {
        console.log("Inside fun of base");
    }
}

var O1: Base=new Base(11,12);
console.log(O1.no1)
console.log(O1.no2)

var bobj2: Base=new Base(50,60);
console.log(bobj2.no1)
console.log(bobj2.no2)

class Derived extends Base
{
    value : number;
    gun()
    {
        console.log("Derived gun");
    }
}

var dobj: Derived=new Derived(15,16)

dobj.