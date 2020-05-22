function registration(array) {
    let num = array.shift();

    let counter = 0;

    for (const reg of array) {
        let pattern = /U\$(?<user>[A-Z][a-z]{2,})U\$.*P@\$(?<pass>[A-Za-z]{5,}[0-9]+)P@\$/gm;

        let valid = pattern.exec(reg);

        if (valid !== null) {
            console.log("Registration was successful");
            console.log(`Username: ${valid.groups["user"]}, Password: ${valid.groups["pass"]}`);
            counter++;
        } else {
            console.log("Invalid username or password");
        }
    }

    console.log(`Successful registrations: ${counter}`);
}

registration(["3", "U$MichaelU$P@$asdqwe123P@$", "U$NameU$P@$PasswordP@$", "U$UserU$P@$ad2P@$"]);
console.log();
registration(["2", "U$TommyU$P@$asdqwe123P@$", "Sara 1232412"]);
console.log();
registration(["3", "U$myU$-->P@$asdqwe123P@$", "Sara 1232412", "U$NameU$P@$Pass234P@$"]);
