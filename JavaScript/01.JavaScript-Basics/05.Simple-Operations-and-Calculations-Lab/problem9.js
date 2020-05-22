function solve (input){
      let leght = Number(input.shift());
      let hight = Number(input.shift());
      let wight = Number(input.shift());
      let percent = Number(input.shift());

      let obem = leght * hight * wight;
      let obshtoLitri = obem * 0.001;
      let percentDrugo = percent * 0.01;
      let litriVoda = obshtoLitri * (1 - percentDrugo);

      console.log(litriVoda.toFixed(3));
}

solve (["85","75","47","17"]);
solve (["105","77","89","18.5"]);