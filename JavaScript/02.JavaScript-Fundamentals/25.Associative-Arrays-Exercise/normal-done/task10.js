function farming(data) {
    let dataArr = makeIterable(data);

    let keyitems = new Map().set("shards", 0).set("fragments", 0).set("motes", 0);
    let junkItems = new Map();
    let itemObtained;

    for (let i = 0; i < dataArr.length; i += 2) {
        if (dataArr[i + 1] === "shards" || dataArr[i + 1] === "fragments" || dataArr[i + 1] === "motes") {
            addMaterial(keyitems, dataArr[i + 1], Number(dataArr[i]));
            itemObtained = isItemObtained(keyitems);

            if (itemObtained === "Shadowmourne" || itemObtained === "Valanyr" || itemObtained === "Dragonwrath") {
                console.log(`${itemObtained} obtained!`);
                break;
            }
        } else {
            addMaterial(junkItems, dataArr[i + 1], Number(dataArr[i]));
        }
    }

    let sortedKeyitems = Array.from(keyitems).sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1] - a[1];
        }
    });

    let sortedJunkItems = Array.from(junkItems).sort((a, b) => a[0].localeCompare(b[0]));

    printMaterials(sortedKeyitems);
    printMaterials(sortedJunkItems);

    // console.log(sortedKeyitems);
    // console.log(sortedJunkItems);

    function printMaterials(materials) {
        for (const [material, val] of materials) {
            console.log(`${material}: ${val}`);
        }
    }

    function isItemObtained(keyitems) {
        for (const [prop, val] of keyitems) {
            if (val >= 250) {
                keyitems.set(prop, val - 250);
                switch (prop) {
                    case "shards":
                        return "Shadowmourne";
                        break;
                    case "fragments":
                        return "Valanyr";
                        break;
                    case "motes":
                        return "Dragonwrath";
                        break;
                }
            }
        }
    }

    function addMaterial(listToAdd, material, value) {
        let isNew = true;
        for (const [prop, val] of listToAdd) {
            if (prop === material) {
                isNew = false;
                listToAdd.set(prop, val + value);
            }
        }

        if (isNew) {
            listToAdd.set(material, value);
        }
    }

    function makeIterable(someString) {
        return someString.toLowerCase().split(" ");
    }
}

farming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
farming("123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver");
