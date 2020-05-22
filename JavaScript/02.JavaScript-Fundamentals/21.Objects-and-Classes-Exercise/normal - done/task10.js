function systemsRegister(array = []) {
    let register = [];

    class System {
        constructor(systemName, componentName, subcomponents) {
            this.systemName = systemName;
            this[componentName] = [subcomponents];
        }
    }

    for (const key of array) {
        let line = key.split(" | ");
        //console.log(line);

        let isSystemNew = true;

        for (const key of register) {
            if (key.systemName == line[0]) {
                isSystemNew = false;

                if (key.hasOwnProperty(line[1])) {
                    key[line[1]].push(line[2]);
                } else {
                    key[line[1]] = [line[2]];
                }
            }
        }

        if (isSystemNew) {
            register.push(new System(line[0], line[1], line[2]));
        }
    }

    register.sort((a, b) => {
        if (Object.keys(a).length === Object.keys(b).length) {
            return a.systemName.localeCompare(b.systemName);
        } else {
            return Object.keys(a).length - Object.keys(b);
        }
    });

    // for (const system of register) {
    //     console.log(system.systemName);
    //     let componentsArray = Object.keys(system);
    //     for (const component of componentsArray) {
    //         if (component != "systemName") {
    //             console.log("|||" + component);
    //             for (const subComponent of system[component]) {
    //                 console.log("||||||" + subComponent);
    //             }
    //         }
    //     }
    //     //console.log(componentsArray);
    // }

    // console.log();
    // console.log();
    console.log(register);
}

systemsRegister([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security",
]);
