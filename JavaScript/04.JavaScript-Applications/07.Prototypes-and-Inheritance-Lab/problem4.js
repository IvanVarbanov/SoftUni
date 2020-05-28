function solve() {
    class Figure {
        units = {
            m: 0.01,
            cm: 1,
            mm: 10,
        };
        constructor(unit = 'cm') {
            this.defaultUnit = unit;
        }

        changeUnits(unit) {
            this.defaultUnit = unit;
        }

        get area() {
            return NaN;
        }

        toString() {
            return `Figures units: ${this.defaultUnitefa} Area: ${this.area}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, unit = 'cm') {
            super(unit);
            this.radius = radius;
        }

        get area() {
            return (
                Math.PI * (this.radius * this.units[this.defaultUnit] * (this.radius * this.units[this.defaultUnit]))
            );
        }

        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} - radius: ${
                this.radius * this.units[this.defaultUnit]
            }`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, unit = 'cm') {
            super(unit);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.units[this.defaultUnit] * (this.height * this.units[this.defaultUnit]);
        }

        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} - width: ${
                this.width * this.units[this.defaultUnit]
            }, height: ${this.height * this.units[this.defaultUnit]}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}

let classes = solve();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

console.log();

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

console.log();

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

console.log();

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
