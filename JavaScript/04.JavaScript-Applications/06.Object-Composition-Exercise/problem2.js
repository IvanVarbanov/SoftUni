function solve({ weight, experience, levelOfHydrated, dizziness }) {
    if (dizziness) {
        levelOfHydrated += weight * 0.1 * experience;
    }

    return {
        weight,
        experience,
        levelOfHydrated,
        dizziness: false,
    };
}

let worker1 = solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
let worker2 = solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });
let worker3 = solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false });

console.log(worker1);
console.log(worker2);
console.log(worker3);
