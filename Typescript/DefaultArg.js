function Area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var ans = 0;
    ans = PI * Radius * Radius;
    return ans;
}
var no = 10.2;
var ret = 0;
ret = Area(no, 7.12);
console.log("Area is:", ret);
ret = Area(no);
console.log("Area is:", ret);
