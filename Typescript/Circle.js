var pi = 3.14;
var radius = 14;
var area;
area = pi * radius * radius;
//implementing reusablility
function circleArea(r, p) {
    if (p === void 0) { p = 3.14; }
    return p * r * r;
}
console.log("Area of circle is::", circleArea(10));
