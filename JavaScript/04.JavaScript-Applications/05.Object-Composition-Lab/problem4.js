function solve(input) {
    let arr = JSON.parse(input);
    let res = {};

    arr.forEach((el) => {
        Object.assign(res, el);
    });

    return res;
}

solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);
