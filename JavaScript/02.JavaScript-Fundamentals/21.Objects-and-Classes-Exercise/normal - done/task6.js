function dictionary(data = []) {
    let dictionary = [];

    class Term {
        constructor(term, definition) {
            this.term = term;
            this.definition = definition;
        }
    }

    for (const term of data) {
        let termObject = JSON.parse(term);

        // console.log(termObject);

        for (const term in termObject) {
            let isNewTerm = true;
            let counter = 0;

            for (const termInDictionary of dictionary) {
                if (termInDictionary.term == term) {
                    isNewTerm = false;
                    break;
                }
                counter++;
            }

            if (isNewTerm) {
                dictionary.push(new Term(term, termObject[term]));
            } else {
                dictionary[counter].definition = termObject[term];
            }
        }
    }

    dictionary.sort((a, b) => a.term.localeCompare(b.term));

    for (const term of dictionary) {
        console.log(`Term: ${term.term} => Definition: ${term.definition}`);
    }

    //console.log(dictionary);
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
