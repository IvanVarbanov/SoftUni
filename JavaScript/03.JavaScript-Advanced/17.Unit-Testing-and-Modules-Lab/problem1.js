function subSum(dataArray = [], start, end) {
    if (Array.isArray(dataArray)) {
        let isNaN = dataArray.map(Number).includes(NaN);
        if (!isNaN) {
            dataArray = dataArray.map(Number);
            if (start < 0) start = 0;
            if (end >= dataArray.length) end = dataArray.length - 1;
            let sum = 0;

            for (let i = start; i <= end; i++) {
                sum += dataArray[i];
            }
            return sum;
        } else {
            return NaN;
        }
    } else {
        return NaN;
    }
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum(['10', 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));
