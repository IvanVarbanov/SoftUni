function isSymmetric(arr) {
    if (!Array.isArray(arr)) return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = JSON.stringify(arr) == JSON.stringify(reversed);
    return equal;
}

let assert = require('chai').assert;

describe('isSymmetric()', () => {
    it('[1, 2, 3] -> false', () => {
        let result = isSymmetric([1, 2, 3]);
        assert.equal(result, false);
    });

    it('[1, 2, 1] -> true', () => {
        let result = isSymmetric([1, 2, 1]);
        assert.equal(result, true, 'eroor');
    });

    it('nan -> false', () => {
        let result = isSymmetric('nan');
        assert.equal(result, false, 'eroor');
    });

    it('boolean -> false', () => {
        let result = isSymmetric(true);
        assert.equal(result, false, 'eroor');
    });

    it('nan -> false', () => {
        let result = isSymmetric(['a', 'a', 'a']);
        assert.equal(result, true, 'eroor');
    });
});
