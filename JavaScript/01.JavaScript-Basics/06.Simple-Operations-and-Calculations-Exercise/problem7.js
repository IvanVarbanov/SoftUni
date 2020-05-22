function solve(input) {

      let wiskiPrice = Number(input.shift());

      let beerLtr = Number(input.shift());
      let wineLtr = Number(input.shift());
      let rakiqLtr = Number(input.shift());
      let wiskiLtr = Number(input.shift());

      //Цени
      let rakiqPrice = wiskiPrice * 0.5;
      let winePrice = rakiqPrice - (rakiqPrice * 0.4);
      let beerPrice = rakiqPrice - (rakiqPrice * 0.8);

      //Subtotals
      let totalWiski = wiskiPrice * wiskiLtr;
      let totalBeer = beerPrice * beerLtr;
      let totalRakiq = rakiqPrice * rakiqLtr;
      let totalWine = winePrice * wineLtr;

      //Totals
      let grandTotal = totalWiski + totalBeer + totalRakiq + totalWine;

      console.log(grandTotal.toFixed(2))
      console.log(); //Оставя празен ред.

}

solve(["50", "10", "3.5", "6.5", '1']);
solve(["63.44", "3.57", "6.35", "8.15", "2.5"]);