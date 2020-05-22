class Stringer {
    innerString;
    innerLength;
    constructor(string, length) {
        this.innerString = string;
        if (length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength = length;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`;
        } else {
            return this.innerString.slice(0, this.innerLength);
        }
    }

    increase(num) {
        this.innerLength = this.innerLength + num;
    }

    decrease(num) {
        if (num >= this.innerLength) {
            this.innerLength = 0;
        } else {
            this.innerLength = this.innerLength - num;
        }
    }
}

let test = new Stringer('Test', 5);
console.log(test);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
