function solve(input = []) {
    let objList = {};

    const actions = {
        create: (name) => {
            objList[name] = {};
        },
        inherits: (name, parentName) => {
            objList[name] = Object.create(objList[parentName]);
        },
        set: (name, key, value) => {
            objList[name][key] = value;
        },
        pring: (name) => {
            let res = [];

            for (const [key, val] of Object.entries(objList[name])) {
                res.push(`${key}:${val}`);
            }

            if (objList[name].__proto__ !== null) {
                for (const [key, val] of Object.entries(objList[name].__proto__)) {
                    res.push(`${key}:${val}`);
                }
            }

            if (objList[name].__proto__.__proto__ !== null) {
                for (const [key, val] of Object.entries(objList[name].__proto__.__proto__)) {
                    res.push(`${key}:${val}`);
                }
            }

            console.log(res.join(', '));
        },
    };

    input.forEach((el) => {
        let arr = el.split(' ');

        if (arr[0] === 'create' && arr.length === 2) {
            actions.create(arr[1]);
        } else if (arr[0] === 'create' && arr.length === 4) {
            actions.inherits(arr[1], arr[3]);
        } else if (arr[0] === 'set') {
            actions.set(arr[1], arr[2], arr[3]);
        } else if (arr[0] === 'print') {
            actions.pring(arr[1]);
        }
    });

    // console.log(objList.c2.color);
}

solve(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);
solve([
    'create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat',
]);
