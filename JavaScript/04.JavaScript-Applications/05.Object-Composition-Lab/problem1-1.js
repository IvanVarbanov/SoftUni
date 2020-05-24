function solve() {
    function mage(name) {
        return {
            name,
            health: 100,
            mana: 100,
            cast: function (spell) {
                this.mana -= 1;
                console.log(`${this.name} cast ${spell}`);
            },
        };
    }

    function fighter(name) {
        return {
            name,
            health: 100,
            stamina: 100,
            fight: function () {
                this.stamina -= 1;
                console.log(`${this.name} slashes at the foe!`);
            },
        };
    }

    return {
        mage: mage,
        fighter: fighter,
    };
}

let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
