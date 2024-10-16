const pi:number=3.14;
var radius:number=14;
var area:number;
area=pi*radius*radius;

//implementing reusablility
function circleArea(r:number,p:number=3.14):number
{
    return p*r*r;
}
console.log("Area of circle is::",circleArea(10));
