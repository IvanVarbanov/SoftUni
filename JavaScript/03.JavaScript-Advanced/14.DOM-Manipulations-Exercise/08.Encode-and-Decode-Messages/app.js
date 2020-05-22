function encodeAndDecodeMessages() {
    const encode = document.getElementsByTagName('button')[0];
    const decode = document.getElementsByTagName('button')[1];
    const decodedTextarea = document.getElementsByTagName('textarea')[0];
    const encodedTextarea = document.getElementsByTagName('textarea')[1];

    encode.addEventListener('click', (e) => {
        if (decodedTextarea.value) {
            let textToEncode = decodedTextarea.value.split('');
            decodedTextarea.value = '';
            const encodedText = textToEncode.map((el) => {
                return String.fromCharCode(Number(el.charCodeAt(0)) + 1);
            });
            encodedTextarea.value = encodedText.join('');
        }
    });

    decode.addEventListener('click', (e) => {
        if (encodedTextarea.value) {
            const encodedText = encodedTextarea.value;
            const decodedText = encodedText.split('').map((el) => {
                return String.fromCharCode(Number(el.charCodeAt(0)) - 1);
            });
            encodedTextarea.value = decodedText.join('');
        }
    });
}
