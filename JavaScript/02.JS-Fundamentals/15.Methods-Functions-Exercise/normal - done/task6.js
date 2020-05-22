function validator(pass) {
    let passArray = pass.split("");
    let digits = 0;
    let onleylettersAndDigits = false;
    let passValid = true;

    for (let i = 0; i < passArray.length; i++) {
        let char = passArray[i].charCodeAt();

        if (char >= 48 && char <= 57) {
            digits++;
        }

        if (!((char >= 48 && char <= 57) || (char >= 65 && char <= 90) || (char >= 97 && char <= 122))) {
            onleylettersAndDigits = true;
        }
    }

    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        passValid = false;
    }

    if (onleylettersAndDigits) {
        passValid = false;
        console.log("Password must consist only of letters and digits");
    }

    if (digits < 2) {
        passValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (passValid) {
        console.log("Password is valid");
    }
}

validator("logIn");
console.log();
validator("MyPass123");
console.log();
validator("Pa$s$s");
