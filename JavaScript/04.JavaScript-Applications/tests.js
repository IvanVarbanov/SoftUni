let obj = {
    a: 4,
    b: 5,
    print: function () {
        console.log(this);
    },
};

obj.print();
