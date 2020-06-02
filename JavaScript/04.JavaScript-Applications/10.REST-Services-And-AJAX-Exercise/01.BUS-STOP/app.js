function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    buses.innerHTML = '';

    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            if (data.name) {
                Object.entries(data).forEach(([key, val]) => {
                    if (key === 'name') {
                        stopName.textContent = val;
                    } else {
                        Object.entries(val).forEach(([key, val]) => {
                            buses.innerHTML += `
                            <li>
                                Bus ${key} arrives in ${val}
                            </li>`;
                        });
                    }
                });
            } else {
                stopName.textContent = 'Error';
            }
        });
}
