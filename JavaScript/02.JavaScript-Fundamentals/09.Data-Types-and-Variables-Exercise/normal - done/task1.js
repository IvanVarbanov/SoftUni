function SumDigits(number) {
    let num = `${number}`;
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    console.log(sum);
}

SumDigits(245678);
SumDigits(97561);
SumDigits(543);
