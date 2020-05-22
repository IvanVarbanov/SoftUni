function travelTime(array = []) {
    let destinationList = new Array();

    for (const line of array) {
        let [country, town, price] = line.split(" > ");
        updateDestination(destinationList, country, town, Number(price));
    }

    //Правим го масив с масиви
    let sortableDestList = [];
    for (const dest of destinationList) {
        sortableDestList.push(Array.from(dest));
    }

    //Сортираме главните масиви по страна
    sortableDestList.sort((a, b) => {
        return a[0][1].localeCompare(b[0][1]);
    });

    //Сортираме вътрешните масиви по стойност
    for (const dest of sortableDestList) {
        dest.sort((a, b) => {
            return a[1] - b[1];
        });
    }

    //Принтираме резултата
    // for (const dest of sortableDestList) {
    //     let resultForPrint = [];
    //     // console.log(dest);
    //     for (const destArr of dest) {
    //         for (const prop of destArr) {
    //             // console.log(prop);
    //             if (prop === "country") {
    //                 continue;
    //             }
    //             resultForPrint.push(prop);
    //         }
    //     }
    //     console.log(resultForPrint);
    // }

    // ;(
    // for (const dest of sortableDestList) {
    //     console.log(
    //         dest
    //             .join(" ")
    //             .replace("country,", "")
    //             .replace(",", " -> ")
    //             .replace(" ", " -> ")
    //             .replace(",", " -> ")
    //             .replace(",", " -> ")
    //             .replace(",", " -> ")
    //             .replace(",", " -> ")
    //     );
    // }

    console.log();
    console.log(sortableDestList);

    function updateDestination(list, countryToAdd, townToAdd, priceToAdd) {
        let isNew = true;

        for (const dest of list) {
            if (dest.get("country") == countryToAdd) {
                isNew = false;
                if (dest.has(townToAdd)) {
                    dest.set(townToAdd, Math.min(dest.get(townToAdd), priceToAdd));
                } else {
                    dest.set(townToAdd, priceToAdd);
                }
            }
        }

        if (isNew) {
            list.push(new Map().set("country", countryToAdd).set(townToAdd, priceToAdd));
        }
    }
}

travelTime([
    "Bulgaria > Sopot > 800",
    "Bulgaria > Sofia > 500",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
]);
