function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    daysBtn.addEventListener('click', (e) => {
        let input = Number(days.value);
        hours.value = input * 24;
        minutes.value = input * 24 * 60;
        seconds.value = input * 24 * 60 * 60;
    });

    hoursBtn.addEventListener('click', (e) => {
        let input = Number(hours.value);
        days.value = input / 24;
        minutes.value = input * 60;
        seconds.value = input * 60 * 60;
    });

    minutesBtn.addEventListener('click', (e) => {
        let input = Number(minutes.value);
        hours.value = input / 60;
        days.value = input / 60 / 24;
        seconds.value = input * 60;
    });

    secondsBtn.addEventListener('click', (e) => {
        let input = Number(seconds.value);
        hours.value = input / 60 / 60;
        minutes.value = input / 60;
        days.value = input / 60 / 60 / 24;
    });
}
