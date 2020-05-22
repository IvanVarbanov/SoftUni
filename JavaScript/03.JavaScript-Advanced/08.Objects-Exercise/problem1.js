function inventory(array) {
    let res = [];

    for (const line of array) {
        let [name, level, items] = line.split(' / ');
        items = items.split(', ');

        res.push({
            name: name,
            level: Number(level),
            items: items,
        });
    }

    // console.log(res);

    console.log(JSON.stringify(res));
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);
