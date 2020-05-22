function solve() {
    let arr = document.getElementById('arr').value;
    let result = document.getElementById('result');

    let pattern = /(?<name>[A-Z][a-z]* [A-Z][a-z]*) (?<phone>\+359([- ])[0-9]\3[0-9]{3}\3[0-9]{3}) (?<email>[a-z0-9]+@[a-z]+\.[a-z]{2,3})/gm;

    JSON.parse(arr).forEach((element) => {
        let res = [...element.matchAll(pattern)];

        if (res.length > 0) {
            result.innerHTML += `
            <div>Name: ${res[0].groups.name}</div>
            <div>Phone Number: ${res[0].groups.phone}</div>
            <div>Email: ${res[0].groups.email}</div>
            <div>- - -</div>
            `;
        } else {
            result.innerHTML += `
            <div>Invalid data</div>
            <div>- - -</div>
            `;
        }
    });
}
