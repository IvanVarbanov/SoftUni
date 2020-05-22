function solve(input) {
    let speed = Number(input.shift());

    if (speed <= 10) {
        console.log("slow");
    } else if (speed > 10 && speed <= 50) {
        console.log("avarage");
    } else if (speed > 50 && speed <= 150) {
        console.log("fast");
    } else if (speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

solve(["8"]);
solve(["49.5"]);
solve(["126"]);
solve(["160"]);
solve(["3500"]);
