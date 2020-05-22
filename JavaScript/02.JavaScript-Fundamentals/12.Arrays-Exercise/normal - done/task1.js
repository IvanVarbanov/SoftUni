function addOtSubtract(data = []) {
    let newArr = [];
    let dataSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < data.length; i++) {
        let currenNum = data[i];

        dataSum += currenNum;

        if (currenNum % 2 == 0) {
            currenNum += i;
            newArrSum += currenNum;
        } else {
            currenNum -= i;
            newArrSum += currenNum;
        }

        newArr.push(currenNum);
    }

    console.log(newArr);
    console.log(dataSum);
    console.log(newArrSum);
}

addOtSubtract([5, 15, 23, 56, 35]);
