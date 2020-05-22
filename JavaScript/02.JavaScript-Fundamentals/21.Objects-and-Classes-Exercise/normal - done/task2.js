function towns(array = []) {
    let towns = [];

    function formatStrings(string) {
        return Number(string).toFixed(2);
    }

    class Town {
        constructor(townName, townLatitude, townLongitude) {
            this.town = townName;
            this.latitude = townLatitude;
            this.longitude = townLongitude;
        }
    }

    for (let i = 0; i < array.length; i++) {
        let townData = array[i].split(" | ");

        towns.push(new Town(townData[0], formatStrings(townData[1]), formatStrings(townData[2])));
    }

    for (const key of towns) {
        console.log(JSON.parse(JSON.stringify(key)));
    }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
