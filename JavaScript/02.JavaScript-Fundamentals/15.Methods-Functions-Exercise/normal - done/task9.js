function loadingBar(prescents) {
    let loading = (a) => " [" + "%".repeat(a / 10) + ".".repeat(10 - a / 10) + "]";

    if (prescents <= 90) {
        console.log(`${prescents}%` + loading(prescents));
        console.log("Still loading...");
    } else {
        console.log("100% Complete");
        console.log(loading(prescents));
    }
}

loadingBar(10);
