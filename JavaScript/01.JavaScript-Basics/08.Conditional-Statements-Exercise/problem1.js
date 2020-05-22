function solve(input) {
    let timeFirst = Number(input.shift());
    let timeSecound = Number(input.shift());
    let timeThird = Number(input.shift());

    let totalTime = timeFirst + timeSecound + timeThird;

    let minutes = Math.floor(totalTime / 60);
    let secounds = totalTime % 60;

    if (secounds < 10) {
        console.log(`${minutes}:0${secounds}`);
    } else {
        console.log(`${minutes}:${secounds}`);
    }
}

solve(["35", "45", "44"]);
solve(["22", "7", "34"]);
solve(["50", "50", "49"]);
solve(["14", "12", "10"]);
