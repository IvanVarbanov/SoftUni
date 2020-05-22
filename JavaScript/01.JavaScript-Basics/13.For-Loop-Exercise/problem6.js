function solve(input) {
    let counter = +input.shift();
    let salary = +input.shift();

    for (i = 0; i < counter && salary > 0; i++) {
        let tabName = input.shift();
        switch (tabName) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
    }

    if (salary > 0) {
        console.log(salary);
    } else {
        console.log("You have lost your salary.");
    }
}

solve(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
console.log();
solve(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
