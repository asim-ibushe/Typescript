function Area(Radius: number,PI:number=3.14)
{
    var ans=0;
    ans=PI*Radius*Radius;
    return ans;
}

var no:number=10.2;
var ret: number=0;

ret=Area(no,7.12);
console.log("Area is:",ret);

ret=Area(no);
console.log("Area is:",ret);