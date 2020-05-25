function solve() {
    let obj = {
        extend: function (template) {
            Object.keys(template).forEach((el) => {
                if (typeof el === 'function') {
                    Object.getPrototypeOf(this)[el] = template[el];
                } else {
                    this[el] = template[el];
                }
            });
        },
    };

    obj.extend({
        a: 2131321,
        b: 'dsfsdfsdf',
        c: function () {
            return this;
        },
    });

    return obj;
}
