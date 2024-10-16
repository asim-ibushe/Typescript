//multiple object module import
import {Addition,Substraction,Multi} from "./Server"

main()
function main()
{
    var x: number=11;
    var y:number=20;
    var ret:number=0;
    ret=Addition(x,y);
    console.log("Addition of the two number is as follow:",ret);
    ret=Substraction(x,y);
    console.log("Substraction of the two number is as follow:",ret);
    //concept of alias or reference using object Multi 
    console.log("Multiplication of two number is:",Multi(3,4));
}