function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        },
    };
}

let assert = require('chai').assert;

describe('createCalculator()', () => {
    describe('add()', () => {
        it('5 -> 5', () => {
            let calculator = createCalculator();
            let res = calculator.add(5);
            assert.equal(calculator.get(), 5);
        });

        it('"5" -> 5', () => {
            let calculator = createCalculator();
            let res = calculator.add('5');
            assert.equal(calculator.get(), 5);
        });

        it('"a" -> NaN', () => {
            let calculator = createCalculator();
            let res = calculator.add('a');
            assert.isNaN(calculator.get(), 'nan is nan');
        });
    });

    describe('subtract()', () => {
        it('-5 -> 5', () => {
            let calculator = createCalculator();
            let res = calculator.subtract(-5);
            assert.equal(calculator.get(), 5);
        });

        it('"-5" -> 5', () => {
            let calculator = createCalculator();
            let res = calculator.subtract('-5');
            assert.equal(calculator.get(), 5);
        });

        it('"a" -> NaN', () => {
            let calculator = createCalculator();
            let res = calculator.subtract('a');
            assert.isNaN(calculator.get());
        });
    });
});
