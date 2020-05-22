function arenaTier(array = []) {
    let pool = new Array();

    for (const line of array) {
        let wordsNum = line.split(' ').length;

        if (wordsNum > 3) {
            //Когато получаваме гладиатор
            let [name, skill, points] = line.split(' -> ');
            gladiatorsUpdate(pool, name, skill, points);
        } else if (wordsNum == 3) {
            //Когато имаме битка
            let [gladiatorOneName, gladiatorTwoName] = line.split(' vs ');

            if (isGladiatorExist(pool, gladiatorOneName) && isGladiatorExist(pool, gladiatorTwoName)) {
                let gladiatorOne = getGladiatorFromPool(pool, gladiatorOneName);
                let gladiatorTwo = getGladiatorFromPool(pool, gladiatorTwoName);

                if (compareGladiators(gladiatorOne, gladiatorTwo)) {
                    let loserName = loser(gladiatorOne, gladiatorTwo);
                    pool = pool.filter((obj) => {
                        return obj.get('name') !== loserName;
                    });
                }
            }
        }
    }
    // console.log(pool);

    pool.sort((a, b) => {
        if (b.get('totalSkill') == a.get('totalSkill')) {
            return a.get('name').localeCompare(b.get('name'));
        } else {
            return b.get('totalSkill') - a.get('totalSkill');
        }
    });

    let sortablePool = [];
    for (const obj of pool) {
        sortablePool.push(Array.from(obj));
    }

    for (const glad of sortablePool) {
        glad.sort((a, b) => {
            if (b[1] == a[1]) {
                return a[0].localeCompare(b[0]);
            } else {
                return b[1] - a[1];
            }
        });
    }

    //console.log(sortablePool);

    for (const gladiator of sortablePool) {
        console.log(`${gladiator[0][1]}: ${gladiator[1][1]} skill`);
        for (const [prop, val] of gladiator) {
            if (prop === 'name' || prop === 'totalSkill') {
                continue;
            }
            console.log(`- ${prop} <!> ${val}`);
        }
    }

    function loser(gladiatorOne, gladiatorTwo) {
        let totalSkillGladiatorOne = gladiatorOne.get('totalSkill');
        let totalSkillGladiatorTwo = gladiatorTwo.get('totalSkill');

        if (totalSkillGladiatorOne > totalSkillGladiatorTwo) {
            return gladiatorTwo.get('name');
        } else {
            return gladiatorOne.get('name');
        }
    }

    function compareGladiators(gladiatorOne, gladiatorTwo) {
        let match = false;
        for (const [gladiatorOneskill] of gladiatorOne) {
            if (gladiatorOneskill === 'name' || gladiatorOneskill === 'totalSkill') {
                continue;
            }

            for (const [gladiatorTwoskill] of gladiatorTwo) {
                if (gladiatorOneskill === gladiatorTwoskill) {
                    match = true;
                }
            }
        }

        return match;
    }

    function getGladiatorFromPool(pool = new Array(), gladiatorName) {
        return pool.find((gladiator) => {
            return gladiator.get('name') === gladiatorName;
        });
    }

    function isGladiatorExist(gladiatorsList, gladiatorName) {
        let output = false;
        for (const gladiator of gladiatorsList) {
            if (gladiator.get('name') === gladiatorName) {
                output = true;
                break;
            }
        }
        return output;
    }

    function gladiatorsUpdate(gladiatorsList = new Set(), name, skill, points) {
        let isNew = true;

        for (const gladiator of gladiatorsList) {
            if (gladiator.get('name') === name) {
                isNew = false;
                if ((gladiator.get(skill) && gladiator.get(skill) < Number(points)) || !gladiator.get(skill)) {
                    gladiator
                        .set(skill, Number(points))
                        .set('totalSkill', gladiator.get('totalSkill') + Number(points));
                }

                break;
            }
        }

        if (isNew) {
            gladiatorsList.push(
                new Map().set('name', name).set('totalSkill', Number(points)).set(skill, Number(points))
            );
        }
    }
}

// arenaTier([
//     'Pesho -> BattleCry -> 400',
//     'Gosho -> PowerPunch -> 300',
//     'Stamat -> Duck -> 200',
//     'Stamat -> Tiger -> 250',
//     'Ave Cesar',
// ]);
// console.log();
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    // 'Gladius vs Julius',
    // 'Gladius vs Gosho',
    'Ave Cesar',
]);
