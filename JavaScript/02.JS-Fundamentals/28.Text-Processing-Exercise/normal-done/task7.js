function reverse(string = "") {
    let length = Math.trunc(string.length / 2);

    let firstStr = string.substring(0, length).split("").reverse().join("");
    let secoundStr = string.substring(length, string.length).split("").reverse().join("");

    console.log(firstStr);
    console.log(secoundStr);
}

reverse("tluciffiDsIsihTgnizamAoSsIsihT");
