function solve() {
    const canCast = (state) => ({
        cast: (spell) => {
            state.mana -= 1;
            console.log(`${state.name} cast ${spell}`);
        },
    });

    const canFight = (state) => ({
        fight: () => {
            state.stamina -= 1;
            console.log(`${state.name} slashes at the foe!`);
        },
    });

    const fighter = (name) => {
        let state = {
            name,
            stamina: 100,
        };

        return Object.assign(state, canFight(state));
    };

    const mage = (name) => {
        let state = {
            name,
            mana: 100,
        };

        return Object.assign(state, canCast(state));
    };

    return { mage, fighter };
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
