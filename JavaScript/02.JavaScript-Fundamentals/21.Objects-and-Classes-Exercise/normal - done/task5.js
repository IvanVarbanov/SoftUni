function heroes(heroes = []) {
    let heroesList = [];

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    for (const hero of heroes) {
        let heroData = hero.split(" / ");

        //console.log(heroData);

        heroesList.push(new Hero(heroData[0], Number(heroData[1]), heroData[2].split(", ")));
    }

    heroesList.sort((a, b) => {
        return a.level - b.level;
    });

    for (const hero of heroesList) {
        hero.items.sort((a, b) => {
            return a.localeCompare(b);
        });
    }

    //console.log(heroesList);

    for (const hero of heroesList) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

heroes([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
