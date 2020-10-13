var Lodash = /** @class */ (function () {
    function Lodash() {
    }
    Lodash.prototype.sum = function (Arr) {
        var sum = 0;
        for (var i = 0; i < Arr.length; i++) {
            sum += Arr[i];
        }
        return sum;
    };
    Lodash.prototype.chunk = function (Arr, size) {
        var output = [];
        for (var i = 0; i < Arr.length; i += size) {
            var j = i;
            var chunk = [];
            while (j < i + size && j < Arr.length) {
                chunk.push(Arr[j]);
                j++;
            }
            output.push(chunk);
        }
        console.log("Chunks of size ", size, " of array ", Arr, " is ", output);
        return output;
    };
    Lodash.prototype.find = function (Arr, elm) {
        for (var i = 0; i < Arr.length; i++) {
            if (Arr[i] === elm) {
                console.log("Element " + elm + " is found at index ", i, " in array", Arr);
                return i;
            }
        }
        console.log("Element " + elm + " is not present in the Array ", Arr);
        return -1;
    };
    Lodash.prototype.filter = function (Arr, func) {
        var output = [];
        for (var i = 0; i < Arr.length; i++) {
            if (func(Arr[i])) {
                output.push(Arr[i]);
            }
        }
        return output;
    };
    Lodash.prototype.reduce = function (Arr, func, initialVal) {
        for (var _i = 0, Arr_1 = Arr; _i < Arr_1.length; _i++) {
            var i = Arr_1[_i];
            initialVal = func(initialVal, i);
        }
        return initialVal;
    };
    return Lodash;
}());
var obj = new Lodash();
var Arr = [1, 2, 3, 4, 5];
//Sum
console.log("Sum of [1,2,3,4,5] is :", obj.sum(Arr));
//Find
obj.find(Arr, 2);
obj.find(Arr, 8);
//Chunk
obj.chunk(Arr, 2);
obj.chunk([1, 2, 3, 4, 5, 2, 32, 3, 4, 5, 4, 5], 4);
obj.chunk(Arr, 1);
obj.chunk(Arr, 6);
//Filter
console.log("Filter by greater than 5 - [10,2,3,14,8] --> ", obj.filter([10, 2, 3, 14, 8], function (value) { return value > 5; }));
console.log("Filter by divisible by 5 - [10,20,3,14,80] --> ", obj.filter([10, 20, 3, 14, 80], function (value) { return value % 5 === 0; }));
//Reduce
console.log("Reduce - Sum of [1,2,3,4,5] :", obj.reduce(Arr, function (a, b) { return a + b; }, 0));
console.log("Reduce - Product of [1,2,3,4,5] :", obj.reduce(Arr, function (a, b) { return a * b; }, 1));
