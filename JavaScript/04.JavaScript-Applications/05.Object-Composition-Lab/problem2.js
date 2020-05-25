function solve(array = []) {
    const functions = (state) => ({
        area: () => state.width * state.height,
        compareTo: function (other) {
            this.area() - other.area();
        },
    });

    return array
        .reduce((a, c) => {
            let state = {
                width: c[0],
                height: c[1],
            };

            a.push(Object.assign(state, functions(state)));
            return a;
        }, [])
        .sort((a, b) => {
            if (a.area() === b.area()) {
                return b.width - a.width;
            } else {
                return b.area() - a.area();
            }
        });
}

solve([
    [10, 5],
    [5, 12],
]);
solve([
    [10, 5],
    [3, 20],
    [5, 12],
]);

console.log(
    solve([
        [10, 5],
        [3, 20],
        [5, 12],
    ])
);
