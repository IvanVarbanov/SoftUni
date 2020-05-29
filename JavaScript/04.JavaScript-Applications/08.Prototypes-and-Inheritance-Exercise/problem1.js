function solve() {
    class Balloon {
        color;
        gasWeight;
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        ribbonColor;
        ribbonLength;
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.#ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            };
        }

        get ribbon() {
            return this.#ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        #text;
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.#text = text;
        }

        get text() {
            return this.text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    };
}
