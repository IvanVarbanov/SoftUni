function solve(input) {
	let broiMasi = Number(input.shift());
	let dyljina = Number(input.shift()); //Дължина на масата
	let dyljinaPokrivki = dyljina + 0.6; // Дължината + 2*0.30 от всяка страна покривка
	let shirochinaPokrivki = Number(input.shift()) + 0.6; // Вирочината + 2*0.30 от всяка страна

	let licePokrivki = shirochinaPokrivki * dyljinaPokrivki;
	let liceKareta = (dyljina / 2) * (dyljina / 2);

	//Цени в долари
	let pokrivkaUSD = licePokrivki * 7;
	let kareUSD = liceKareta * 9;
	let totalUSD = (kareUSD + pokrivkaUSD) * broiMasi;

	// Цени на квадрат в лева
	let pokrivkaBGN = pokrivkaUSD * 1.85;
	let karetaBGN = kareUSD * 1.85;
	let totalBGN = (pokrivkaBGN + karetaBGN) * broiMasi;

	console.log(`${totalUSD.toFixed(2)} USD`);
	console.log(`${totalBGN.toFixed(2)} BGN`);
	console.log();
}

solve(['5', '1.00', '0.50']);

solve(['sad', 'sad']);
solve(['10', '1.20', '0.65']);