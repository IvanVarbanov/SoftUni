class List {
    #list = [];

    add(num) {
        this.#list.push(num);
        this.#list.sort((a, b) => a - b);
    }

    get(num) {
        return this.#list[num];
    }

    remove(num) {
        this.#list.splice(num, 1);
    }

    get size() {
        return this.#list.length;
    }
}

let list = new List();
console.log(list);
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
