function mirrorWords(array) {
    let pairs = [];

    let pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1/gm;
    while ((valid = pattern.exec(array[0])) !== null) {
        // console.log(valid);
        pairs.push([valid.groups["wordOne"], valid.groups["wordTwo"]]);
    }

    if (pairs.length > 0) {
        console.log(`${pairs.length} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }

    // console.log(pairs);

    let mirrorWords = pairs
        .filter((el) => {
            let word = el[1].split("").reverse().join("");
            return el[0] === word;
        })
        .map((a) => `${a[0]} <=> ${a[1]}`);

    if (mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(", "));
    } else {
        console.log(`No mirror words!`);
    }
}

mirrorWords([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log();
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log();
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
