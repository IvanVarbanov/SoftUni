function pascalCase(string = "") {
    let output = string.match(/[A-Z][a-z]+/g);

    console.log(output.join(", "));
}

pascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCase("HoldTheDoor");
pascalCase("ThisIsSoAnnoyingToDo");
