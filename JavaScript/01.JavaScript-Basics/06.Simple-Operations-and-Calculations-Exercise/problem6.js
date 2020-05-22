function solve(input) {
      let days = Number(input.shift());
      let sladkari = Number(input.shift());

      let profitTorti = Number(input.shift()) * 45;
      let profitGofreti = Number(input.shift()) * 5.8;
      let profitPalachinki = Number(input.shift()) * 3.2;

      let totalProfitNaDen = (profitTorti + profitGofreti + profitPalachinki) * sladkari;
      let totalProfit = totalProfitNaDen * days;

      let totalRazhodi = totalProfit / 8;

      let finalResult = totalProfit - totalRazhodi;

      console.log(finalResult.toFixed(2));

      let ivan = "odsijf dsoifjdsoi fjdsiof";
}

solve(["20", "8", "14", "30", "16"]);
