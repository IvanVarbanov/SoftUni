let classes = (function createComputerHierarchy() {
    class Component {
        constructor(manufacturer) {
            if (new.target === Component) {
                throw new Error();
            }

            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Component {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Component {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Component {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Component {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error();
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.width = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(val) {
            if (val instanceof Battery === false) {
                throw new TypeError();
            }
            this._battery = val;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(val) {
            if (val instanceof Keyboard === false) {
                throw new TypeError();
            }
            this._keyboard = val;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(val) {
            if (val instanceof Monitor === false) {
                throw new TypeError();
            }
            this._monitor = val;
        }
    }
    return { Battery, Keyboard, Monitor, Computer, Laptop, Desktop };
})();

let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);
let desktop = new Desktop('JAR Computers', 3.3, 8, 1, keyboard, monitor);
// expect(desktop.manufacturer).to.equal('JAR Computers', 'Expected manufacturer did not match.');
// expect(desktop.processorSpeed).to.be.closeTo(3.3, 0.01, 'Expected processor speed did not match.');
// expect(desktop.ram).to.equal(8, 'Expected RAM did not match.');
// expect(desktop.hardDiskSpace).to.equal(1, 'Expected hard disk space did not match.');
// expect(desktop.keyboard).to.equal(keyboard, 'Expected keyboard did not match.');
// expect(desktop.monitor).to.equal(monitor, 'Expected monitor did not match.');
