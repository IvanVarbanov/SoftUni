function sum(arr) {
    let sum = 0;
    for (num of arr) sum += Number(num);
    return sum;
}

let assert = require('chai').assert;

describe(`sum()`, () => {
    it('[2, 2] -> 4', () => {
        let result = sum([2, 2]);
        assert.equal(result, 4, 'some error');
    });

    it('[3, 2] -> 5', () => {
        let result = sum([3, 2]);
        assert.equal(result, 5, 'some error');
    });

    it('[3, 2] -> 5', () => {
        let result = sum([3, 2]);
        assert.equal(result, 5, 'some error');
    });
});
