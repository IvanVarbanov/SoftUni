function solve() {
    const info = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let depot = 'depot';
    let stop = '';

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${depot}.json`)
            .then((res) => res.json())
            .then((data) => {
                depot = data.next;
                stop = data.name;
                info.textContent = `Next stop ${data.name}`;
                departBtn.setAttribute('disabled', 'true');
                arriveBtn.removeAttribute('disabled');
            });
    }

    function arrive() {
        info.textContent = `Arriving at ${stop}`;
        arriveBtn.setAttribute('disabled', 'true');
        departBtn.removeAttribute('disabled');
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
