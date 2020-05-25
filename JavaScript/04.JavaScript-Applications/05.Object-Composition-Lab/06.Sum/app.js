function result() {
    return {
        id1: '',
        id2: '',
        resultId: '',
        init: function (id1, id2, resultId) {
            this.id1 = id1;
            this.id2 = id2;
            this.resultId = resultId;
        },
        add: function () {
            let input1 = document.querySelector(this.id1).value;
            let input2 = document.querySelector(this.id2).value;
            let res = document.querySelector(this.resultId);
            res.value = Number(input1) + Number(input2);
        },
        subtract: function () {
            let input1 = document.querySelector(this.id1).value;
            let input2 = document.querySelector(this.id2).value;
            let res = document.querySelector(this.resultId);
            res.value = Number(input1) - Number(input2);
        },
    };
}
