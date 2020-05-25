(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }

        return this;
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return str + this;
        }

        return this;
    };

    String.prototype.isEmpty = function () {
        if (!this[0]) {
            return true;
        }

        return false;
    };

    String.prototype.truncate = function (n) {
        if (this.length < n) {
            return this + '';
        }

        if (this.length >= n) {
            if (!this.includes(' ') && n > 4) {
                return this.substring(0, n - 3) + '...';
            } else if (n > 4) {
                let arr = this.split(' ');
                let sum = 0;
                let count = 0;

                if (arr[0].length >= n) {
                    return '...';
                }

                arr = arr.reduce((a, c) => {
                    sum += c.length;
                    if (sum <= n - (3 + count++)) {
                        a.push(c);
                    }
                    return a;
                }, []);

                return arr.join(' ') + '...';
            }

            if (n === 4) {
                return this[0] + '...';
            }

            if (n === 3) {
                return '...';
            }

            if (n === 2) {
                return '..';
            }

            if (n === 1) {
                return '.';
            }

            if (n === 0) {
                return '';
            }
        }
    };

    String.format = function (str, ...params) {
        let arr = str.split(' ');
        arr = arr.map((el) => {
            if (el.startsWith('{')) {
                let shift = params.shift();
                if (shift !== undefined) {
                    return shift;
                }
            }

            return el;
        });
        return arr.join(' ');
    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox', 'quick', 'brown');
// str = String.format('jumps {0} {1}', 'dog');

console.log(str);
