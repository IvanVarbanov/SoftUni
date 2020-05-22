function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let timesBrokeHelmet = Math.trunc(lostFights / 2);
    let timesBrokeSword = Math.trunc(lostFights / 3);
    let timesBrokeShield = Math.trunc(lostFights / 6);
    let timesBrokeArmour = Math.trunc(lostFights / 12);

    let total =
        timesBrokeHelmet * helmetPrice +
        timesBrokeSword * swordPrice +
        timesBrokeShield * shieldPrice +
        timesBrokeArmour * armorPrice;

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
console.log();
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
