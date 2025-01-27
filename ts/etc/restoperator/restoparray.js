var array = [1, 2, 3, 4, 5];
var array2 = [2, 3, 4, 5, 6];
var v = 2;
// console.log(...array)
function multiply(v) {
    var array2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        array2[_i - 1] = arguments[_i];
    }
    var sum = 0;
    array2.forEach(function (element) {
        element * v;
        sum += element * v;
    });
    return sum;
}
console.log(multiply(v, array2));
