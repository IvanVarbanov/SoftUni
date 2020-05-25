function solve({ model, power, color, carriage, wheelsize }) {
    let engine = {
        power: 90,
        volume: 1800,
    };

    if (power > 90 && power < 200) {
        engine = {
            power: 120,
            volume: 2400,
        };
    } else if (power >= 200) {
        engine = {
            power: 200,
            volume: 3500,
        };
    }

    carriage = {
        type: carriage,
        color: color,
    };

    let size = wheelsize;
    if (size % 2 === 0) {
        size -= 1;
    }

    let wheels = [];
    while (wheels.length < 5) {
        wheels.push(size);
    }

    return {
        model,
        engine,
        carriage,
        wheels,
    };
}

let car1 = solve({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });
let car2 = solve({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 });

console.log(car1);
console.log(car2);
