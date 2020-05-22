function gameOfEpicness(generals = [], attacks = []) {
    let kingdomList = makeList(generals);

    for (const attack of attacks) {
        let [kingdom1, general1, kingdom2, general2] = attack;
        kingdomList = battle(kingdomList, kingdom1, general1, kingdom2, general2);
    }

    kingdomList.sort((a, b) => {
        if (a.totalWins === b.totalWins) {
            if (a.totalLosses === b.totalLosses) {
                return a.name.localeCompare(b.name);
            } else {
                return a.totalLosses - b.totalLosses;
            }
        } else {
            return b.totalWins - a.totalWins;
        }
    });

    // console.log(kingdomList);

    let output = Object.entries(kingdomList[0])
        .sort((a, b) => {
            return b[1].army - a[1].army;
        })
        .forEach((element) => {
            if (element[0] === 'name') {
                console.log(`Winner: ${element[1]}`);
            } else if (element[0] !== 'totalWins' && element[0] !== 'totalLosses') {
                console.log(`/\\general: ${element[0]}`);
                for (const prop in element[1]) {
                    console.log(`---${prop}: ${element[1][prop]}`);
                }
            }
        });

    // console.log(output);

    function battle(kingdomList, kingdom1, general1, kingdom2, general2) {
        let army1, army2, winner, losser;

        for (const kingdom of kingdomList) {
            if (kingdom.name === kingdom1 && kingdom[general1] && kingdom1 !== kingdom2) {
                army1 = kingdom[general1].army;
            } else if (kingdom.name === kingdom2 && kingdom[general2]) {
                army2 = kingdom[general2].army;
            }

            if (army1 && army2) {
                if (army1 > army2) {
                    winner = general1;
                    losser = general2;
                } else if (army1 < army2) {
                    winner = general2;
                    losser = general1;
                }
            }
        }

        if (winner && losser) {
            for (const kingdom of kingdomList) {
                if (kingdom[winner]) {
                    kingdom[winner].army = Math.trunc(kingdom[winner].army * 1.1);
                    kingdom[winner].wins = kingdom[winner].wins + 1;
                    kingdom.totalWins += 1;
                } else if (kingdom[losser]) {
                    kingdom[losser].army = Math.trunc(kingdom[losser].army * 0.9);
                    kingdom[losser].losses = kingdom[losser].losses + 1;
                    kingdom.totalLosses += 1;
                }
            }
        }

        return kingdomList;
    }

    function makeList(data) {
        let result = [];
        for (const general of data) {
            let isNew = true;
            for (const kingdom of result) {
                if (kingdom.name === general.kingdom) {
                    isNew = false;
                    if (kingdom[general.general]) {
                        kingdom[general.general] = {
                            army: kingdom[general.general].army + general.army,
                            wins: 0,
                            losses: 0,
                        };
                    } else {
                        kingdom[general.general] = { army: general.army, wins: 0, losses: 0 };
                    }
                }
            }
            if (isNew) {
                result.push({
                    name: general.kingdom,
                    totalWins: 0,
                    totalLosses: 0,
                    [general.general]: { army: general.army, wins: 0, losses: 0 },
                });
            }
        }
        return result;
    }
}

gameOfEpicness(
    [
        { kingdom: 'Maiden Way', general: 'Merek', army: 5000 },
        { kingdom: 'Stonegate', general: 'Ulric', army: 4900 },
        { kingdom: 'Stonegate', general: 'Doran', army: 70000 },
        { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
        { kingdom: 'YorkenShire', general: 'Quinn', army: 2000 },
        { kingdom: 'Maiden Way', general: 'Berinon', army: 100000 },
    ],
    [
        ['YorkenShire', 'Quinn', 'Stonegate', 'Ulric'],
        ['Stonegate', 'Ulric', 'Stonegate', 'Doran'],
        ['Stonegate', 'Doran', 'Maiden Way', 'Merek'],
        ['Stonegate', 'Ulric', 'Maiden Way', 'Merek'],
        ['Maiden Way', 'Berinon', 'Stonegate', 'Ulric'],
    ]
);

// gameOfEpicness(
//     [
//         { kingdom: 'Stonegate', general: 'Ulric', army: 5000 },
//         { kingdom: 'YorkenShire', general: 'Quinn', army: 5000 },
//         { kingdom: 'Maiden Way', general: 'Berinon', army: 1000 },
//     ],
//     [
//         ['YorkenShire', 'Quinn', 'Stonegate', 'Ulric'],
//         ['Maiden Way', 'Berinon', 'YorkenShire', 'Quinn'],
//     ]
// );

// gameOfEpicness(
//     [
//         { kingdom: 'Maiden Way', general: 'Merek', army: 5000 },
//         { kingdom: 'Stonegate', general: 'Ulric', army: 4900 },
//         { kingdom: 'Stonegate', general: 'Doran', army: 70000 },
//         { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
//         { kingdom: 'YorkenShire', general: 'Quinn', army: 2000 },
//     ],
//     [
//         ['YorkenShire', 'Quinn', 'Stonegate', 'Doran'],
//         ['Stonegate', 'Ulric', 'Maiden Way', 'Merek'],
//     ]
// );
