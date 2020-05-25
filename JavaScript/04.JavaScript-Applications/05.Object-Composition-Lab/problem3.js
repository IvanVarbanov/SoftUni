function solve(input = []) {
    let output = [];

    const actions = {
        add: (string) => {
            output.push(string);
        },
        remove: (string) => {
            output = output.filter((a) => a !== string);
        },
        print: () => console.log(output.join(',  ')),
    };

    input.forEach((el) => {
        let [command, string] = el.split(' ');
        actions[command](string);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
