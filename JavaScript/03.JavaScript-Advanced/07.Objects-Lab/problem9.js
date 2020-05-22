function uniqueWords(array) {
    let wordList = new Set();

    for (const line of array) {
        let res = line.toLowerCase();

        let pattern = /[a-z]+/gm;

        while ((valid = pattern.exec(res)) !== null) {
            wordList.add(valid[0]);
        }
    }

    let output = Array.from(wordList);

    console.log(output.join(', '));
}

uniqueWords([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.',
]);
