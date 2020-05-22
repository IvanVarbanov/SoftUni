function solve(input) {
    //Входни данни в см
    let dyljinaZalaCM = Number(input.shift()) * 100;
    let shirinaZalaCM = Number(input.shift()) * 100;
    let stranaGarderobCM = Number(input.shift()) * 100;

    //Размери на обектите
    let goleminaZala = dyljinaZalaCM * shirinaZalaCM;
    let goleminaGardoreb = stranaGarderobCM * stranaGarderobCM;
    let goleminaPeika = goleminaZala / 10;

    let svobodnoProstranstvo = goleminaZala - goleminaGardoreb - goleminaPeika;

    let broiTanciori = svobodnoProstranstvo / (40 + 7000);

    console.log(Math.floor(broiTanciori));
}

solve(["50", "25", "5"]);
