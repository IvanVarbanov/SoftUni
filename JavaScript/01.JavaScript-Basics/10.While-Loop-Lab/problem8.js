function solve(input) {
    let width = +input.shift();
    let lenght = +input.shift();
    let height = +input.shift();

    let packs = input.shift();
    let totalPacks = 0;

    let house = width * lenght * height;

    while (packs != "Done" && house > totalPacks) {
        packs = +packs;
        totalPacks += packs;
        packs = input.shift();
    }

    if (house >= totalPacks) {
        console.log(`${house - totalPacks} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${totalPacks - house} Cubic meters more.`);
    }
}

solve(["10", "10", "2", "20", "20", "20", "20", "122", "Done"]);
console.log();
solve(["10", "1", "2", "4", "6", "Done"]);
