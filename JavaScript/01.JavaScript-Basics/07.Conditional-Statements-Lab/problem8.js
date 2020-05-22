function solve(input) {
    let figureType = input.shift();

    if (figureType === "square") {
        let width = Number(input.shift());
        let area = width * width;

        console.log(area.toFixed(3));
    } else if (figureType === "rectangle") {
        let width = Number(input.shift());
        let height = Number(input.shift());

        let area = width * height;

        console.log(area.toFixed(3));
    } else if (figureType === "circle") {
        let r = Number(input.shift());
        let area = Math.PI * (r * r);

        console.log(area.toFixed(3));
    } else if (figureType === "triangle") {
        let width = Number(input.shift());
        let height = Number(input.shift());

        let area = width * height;

        console.log(area.toFixed(3));
    }
}

solve(["square", "5"]);
solve(["rectangle", "7", "2.5"]);
solve(["circle", "6"]);
solve(["triangle", "4.5", "20"]);
