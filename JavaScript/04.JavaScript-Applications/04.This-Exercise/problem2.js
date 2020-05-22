function getFibonator() {
    function fib(n) {
        if (n <= 1) {
            return 1;
        } else {
            return fib(n - 2) + fib(n - 1);
        }
    }

    let counter = 0;
    return function () {
        let res = fib(counter);
        counter++;
        return res;
    };
}

// 0,1,1,2,3,5,8,13,21,34,55,89,144

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
