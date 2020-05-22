function barIncome(array = []) {
    let totalIncome = 0;

    // let orders = array.slice(0, array.indexOf("end of shift"));
    // console.log(orders);

    array.forEach((element) => {
        let pattern = /%(?<name>[A-Z][a-z]+)%.*<(?<product>\w+)>.*\|(?<qty>[0-9]+)\|\D*(?<price>\d+\.?\d*)\$/g;

        if ((validOrder = pattern.exec(element)) !== null) {
            let name = validOrder.groups["name"];
            let product = validOrder.groups["product"];
            let qty = Number(validOrder.groups["qty"]);
            let price = Number(validOrder.groups["price"]);

            totalIncome += qty * price;

            console.log(`${name}: ${product} - ${(qty * price).toFixed(2)}`);
        }
    });

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

barIncome(["%George%<Croissant>|2|10.3$", "%Peter%<Gum>|1|1.3$", "%Maria%<Cola>|1|2.4$", "end of shift"]);
console.log();
barIncome([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift",
]);
