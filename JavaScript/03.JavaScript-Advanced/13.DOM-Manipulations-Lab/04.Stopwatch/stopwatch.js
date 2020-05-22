function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let time = document.getElementById('time');
    let totalsecounds = 0;

    startBtn.addEventListener('click', () => {
        let interval = setInterval(setTime, 1000);
        startBtn.setAttribute('disabled', '');
        stopBtn.removeAttribute('disabled');

        stopBtn.addEventListener('click', () => {
            stopBtn.setAttribute('disabled', '');
            startBtn.removeAttribute('disabled');
            clearInterval(interval);
        });
    });

    function setTime() {
        totalsecounds++;
        let sec = pad(totalsecounds % 60);
        let min = pad(Math.trunc(totalsecounds / 60));
        time.textContent = `${min}:${sec}`;
    }

    function pad(value) {
        valueString = value + '';
        if (valueString.length < 2) {
            return '0' + valueString;
        } else {
            return valueString;
        }
    }
}
