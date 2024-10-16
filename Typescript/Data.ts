class Base
{
    no1: number;
    no2: number;

    constructor(n1:number,n2:number)
    {
        console.log("Base class constructor")
        this.no1=n1;
        this.no2=n2;
    }

    fun()
    {
        console.log(this.no1);
        console.log(this.no2);
    }
}

class Derived extends Base
{
    value : number;

    constructor(a:number,b:number,c:number)
    {
        console.log("Derived class constructor")
        super(a,b);
        this.value=c;
    }
    gun()
    {
        console.log("Derived class"); 
    }
}

//object creation
var dobj: Derived=new Derived(11,21,31);
