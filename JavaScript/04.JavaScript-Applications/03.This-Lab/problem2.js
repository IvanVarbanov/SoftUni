class Person {
    #first;
    #last;

    constructor(fn, ln) {
        this.#first = fn;
        this.#last = ln;
    }

    set firstName(name) {
        this.#first = name;
    }

    get firstName() {
        return this.#first;
    }

    set lastName(name) {
        this.#last = name;
    }

    get lastName() {
        return this.#last;
    }

    set fullName(name) {
        let [fn, ln] = name.split(' ');
        this.#first = fn;
        if (ln) {
            this.#last = ln;
        }
    }

    get fullName() {
        return `${this.#first} ${this.#last}`;
    }
}

let person = new Person('Peter', 'Ivanov');
console.log(person.fullName); //Peter Ivanov
person.firstName = 'George';
console.log(person.fullName); //George Ivanov
person.lastName = 'Peterson';
console.log(person.fullName); //George Peterson
person.fullName = 'Nikola Tesla';
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla

console.log();

let person2 = new Person('Albert', 'Simpson');
console.log(person2.fullName); //Albert Simpson
person2.firstName = 'Simon';
console.log(person2.fullName); //Simon Simpson
person2.fullName = 'Peter';
console.log(person2.firstName); // Simon
console.log(person2.lastName); // Simpson
