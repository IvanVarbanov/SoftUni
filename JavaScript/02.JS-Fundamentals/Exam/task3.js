function solve(array = []) {
    let numCars = array.shift();

    let carsCollection = new Array();

    class Car {
        constructor(model, mileage, fuel) {
            this.model = model;
            this.mileage = Number(mileage);
            this.fuel = Number(fuel);
        }

        drive(distance, fuel) {
            if (fuel > this.fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                this.mileage = this.mileage + distance;
                this.fuel = this.fuel - fuel;
                console.log(`${this.model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
        }

        refuel(fuel) {
            if (this.fuel + fuel > 75) {
                console.log(`${this.model} refueled with ${75 - this.fuel} liters`);
                this.fuel = 75;
            } else {
                console.log(`${this.model} refueled with ${fuel} liters`);
                this.fuel = this.fuel + fuel;
            }
        }

        revert(kilometers) {
            this.mileage = this.mileage - kilometers;
            if (this.mileage >= 10000) {
                console.log(`${this.model} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    for (let i = 0; i < numCars; i++) {
        let [model, mileage, fuel] = array[i].split("|");

        carsCollection.push(new Car(model, mileage, fuel));
    }

    for (const line of array) {
        let [command, model, optionOne, optionTwo] = line.split(" : ");
        optionOne = Number(optionOne);
        optionTwo = Number(optionTwo);

        if (command === "Drive") {
            for (const index in carsCollection) {
                if (carsCollection[index].model === model) {
                    carsCollection[index].drive(optionOne, optionTwo);
                    if (carsCollection[index].mileage >= 100000) {
                        console.log(`Time to sell the ${carsCollection[index].model}!`);
                        carsCollection.splice(index, 1);
                    }
                    break;
                }
            }
        } else if (command === "Refuel") {
            for (const car of carsCollection) {
                if (car.model === model) {
                    car.refuel(optionOne);
                }
            }
        } else if (command === "Revert") {
            for (const car of carsCollection) {
                if (car.model === model) {
                    car.revert(optionOne);
                }
            }
        }
    }

    let sortable = carsCollection.map((a) => Object.entries(a));

    sortable.sort((a, b) => {
        if (a[1][1] === b[1][1]) {
            return a[0][1].localeCompare(b[0][1]);
        } else {
            return b[1][1] - a[1][1];
        }
    });

    // console.log(sortable);

    let res = sortable.map((a) => `${a[0][1]} -> Mileage: ${a[1][1]} kms, Fuel in the tank: ${a[2][1]} lt.`);

    for (const car of res) {
        console.log(car);
    }
}

solve([
    "3",
    "Audi A6|38000|62",
    "Mercedes CLS|11000|35",
    "Volkswagen Passat CC|45678|5",
    "Drive : Audi A6 : 543 : 47",
    "Drive : Mercedes CLS : 94 : 11",
    "Drive : Volkswagen Passat CC : 69 : 8",
    "Refuel : Audi A6 : 50",
    "Revert : Mercedes CLS : 500",
    "Revert : Audi A6 : 30000",
    "Stop",
]);
// console.log();
// solve([
//     "4",
//     "Lamborghini Veneno|11111|74",
//     "Bugatti Veyron|12345|67",
//     "Koenigsegg CCXR|67890|12",
//     "Aston Martin Valkryie|99900|50",
//     "Drive : Koenigsegg CCXR : 382 : 82",
//     "Drive : Aston Martin Valkryie : 99 : 23",
//     "Drive : Aston Martin Valkryie : 2 : 1",
//     "Refuel : Lamborghini Veneno : 40",
//     "Revert : Bugatti Veyron : 2000",
//     "Stop",
// ]);
