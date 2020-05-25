class SortedList {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = list.length;
    }

    add(el) {
        this.list.push(el).sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        this.list.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index < 0 || index > this.size) {
            throw new Error('Invalid index');
        }

        return this.list[index];
    }
}
