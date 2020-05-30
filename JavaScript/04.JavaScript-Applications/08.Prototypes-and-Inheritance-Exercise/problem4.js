(function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly');
            }

            this.weight = weight;
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon {
        element = 'Water';
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
        }

        toString() {
            return [`Element: ${this.element}`, `Sort: ${this.melonSort}`, `Element Index: ${this.elementIndex}`].join(
                '\n'
            );
        }
    }
    class Firemelon extends Melon {
        element = 'Fire';
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
        }

        toString() {
            return [`Element: ${this.element}`, `Sort: ${this.melonSort}`, `Element Index: ${this.elementIndex}`].join(
                '\n'
            );
        }
    }
    class Earthmelon extends Melon {
        element = 'Earth';
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
        }

        toString() {
            return [`Element: ${this.element}`, `Sort: ${this.melonSort}`, `Element Index: ${this.elementIndex}`].join(
                '\n'
            );
        }
    }
    class Airmelon extends Melon {
        element = 'Air';
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
        }

        toString() {
            return [`Element: ${this.element}`, `Sort: ${this.melonSort}`, `Element Index: ${this.elementIndex}`].join(
                '\n'
            );
        }
    }

    class Melolemonmelon extends Watermelon {
        melonTypeList = ['Water', 'Fire', 'Earth', 'Air'];
        melonTypeIndex = 0;
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        morph() {
            if (this.melonTypeIndex === this.melonTypeList.length - 1) {
                this.melonTypeIndex = 0;
            } else {
                this.melonTypeIndex++;
            }
            this.element = this.melonTypeList[this.melonTypeIndex];
        }
    }

    // let test = new Melon(100, 'Test');
    //Throws error

    // let watermelon = new Watermelon(12.5, 'Kingsize');
    // console.log(watermelon.toString());

    // Element: Water
    // Sort: Kingsize
    // Element Index: 100

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon,
    };
})();
