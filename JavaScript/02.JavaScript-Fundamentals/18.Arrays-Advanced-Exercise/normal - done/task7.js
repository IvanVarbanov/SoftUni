function solve(arr = [], manipulator = []) {
    let output = arr
        .slice(manipulator[1], manipulator[0])
        .filter((a) => a == manipulator[2]);

    console.log(`Number ${manipulator[2]} occurs ${output.length} times.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
