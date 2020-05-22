function commandProcessor() {
    let solution = (function () {
        let string = '';

        function append(text) {
            string += text;
        }

        function removeStart(n) {
            string = string.substring(n);
        }

        function removeEnd(n) {
            string = string.substring(0, string.length - n);
        }

        function print() {
            console.log(string);
        }

        return {
            append,
            removeStart,
            removeEnd,
            print,
        };
    })();

    solution.append('hello');
    solution.append('again');
    solution.print();
    solution.removeStart(3);
    solution.print();
    solution.removeEnd(4);
    solution.print();
}

commandProcessor();
