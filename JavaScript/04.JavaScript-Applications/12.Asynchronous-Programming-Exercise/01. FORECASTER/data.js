function handleError(x) {
    if (!x.ok) {
        throw new Error(x.statusText);
    }

    return x;
}

function desData(x) {
    return x.json();
}

export function fetchData(url, hError = handleError, dData = desData) {
    return fetch(url)
        .then(hError)
        .then(dData)
        .catch((x) => {
            document.getElementById('notification').textContent = 'Error';
        });
}
