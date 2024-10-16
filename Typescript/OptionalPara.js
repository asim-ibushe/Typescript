function fun(name, passport, nationality) {
    if (nationality === void 0) { nationality = "Indian"; }
    console.log("Name is:", name);
    if (passport == undefined) {
        console.log("Sorry id dont have passport");
    }
    else {
        console.log("Passport number is:" + passport);
    }
    console.log("Nationality is:" + nationality);
}
fun("Asim Ibushe", 8854786, "Irish");
function dynamic() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log(data, data.length);
}
dynamic(11, 22, 33, 44);
