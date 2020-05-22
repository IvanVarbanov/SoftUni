function solve (input) {
   let pricePerMeter =  7.61;
   let meter = Number(input.shift());
   let formulaSubtotal = pricePerMeter * meter;
   let formulaDiscount = 0.18 * formulaSubtotal;
   let formulaTotal = formulaSubtotal - formulaDiscount;

   console.log(`The final price is: ${formulaTotal.toFixed(2)} lv.`);
   console.log(`The discount is: ${formulaDiscount.toFixed(2)} lv.`);
}

solve ([540]);