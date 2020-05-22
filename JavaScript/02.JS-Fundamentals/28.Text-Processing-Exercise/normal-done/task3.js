function extractFile(string = "") {
    let pathArr = string.split("\\").pop().split(".");
    let extension = pathArr.pop();

    console.log(`File name: ${pathArr.join(".")}`);
    console.log(`File extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
