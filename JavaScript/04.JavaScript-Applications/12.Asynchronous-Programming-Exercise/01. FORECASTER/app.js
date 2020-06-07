import { fetchData } from './data.js';

const rootUrl = 'https://judgetests.firebaseio.com/';
const mkUrl = (x) => `${rootUrl}${x}/.json`;

const getLocations = () => fetchData(mkUrl('locations'));
const getTodayWather = (code) => fetchData(mkUrl(`forecast/today/${code}`));
const getUpcomingWather = (code) => fetchData(mkUrl(`forecast/upcoming/${code}`));

const elements = {
    location: () => document.getElementById('location'),
    submit: () => document.getElementById('submit'),
    notification: () => document.getElementById('notification'),
    forecastDiv: () => document.getElementById('forecast'),
    currentDiv: () => document.getElementById('current'),
    upcomingDiv: () => document.getElementById('upcoming'),
};

const watherIcons = {
    Sunny: '&#x2600;',
    'Partly sunny': '&#x26C5;',
    Overcast: '&#x2601;',
    Rain: '&#x2614;',
    Degrees: '&#176;',
};

(async () => {
    let locationsData = await getLocations();

    elements.submit().addEventListener('click', async () => {
        try {
            const locationValue = elements.location().value;
            const location = locationsData.find((x) => x.name === locationValue);

            let todayWather = await getTodayWather(location.code);
            let upcomingWather = await getUpcomingWather(location.code);

            console.log(todayWather);
            console.log(upcomingWather);

            elements.forecastDiv().setAttribute('style', 'display:block');
            elements.forecastDiv().innerHTML = `
            <div id="current">
                <div class="label">Current conditions</div>
            </div>
            <div id="upcoming">
                <div class="label">Three-day forecast</div>
            </div>
            `;

            let forecastsDiv = document.createElement('div');
            forecastsDiv.setAttribute('class', 'forecasts');
            forecastsDiv.innerHTML = `
            <span class="Condition symbol">${watherIcons[todayWather.forecast.condition]}</span>
            <span class="condition">
                <span class="forecast-data">${todayWather.name}</span>
                <span class="forecast-data">${todayWather.forecast.low}${watherIcons.Degrees} / ${
                todayWather.forecast.high
            }${watherIcons.Degrees}</span>
                <span class="forecast-data">${todayWather.forecast.condition}</span>
            </span>
            `;
            elements.currentDiv().appendChild(forecastsDiv);

            let forecastInfo = document.createElement('div');
            forecastInfo.setAttribute('class', 'forecast-info');
            upcomingWather.forecast.forEach((el) => {
                forecastInfo.innerHTML += `
                    <span class="upcoming">
                        <span class="symbol">${watherIcons[el.condition]}</span>
                        <span class="forecast-data">${el.low}${watherIcons.Degrees} / ${el.high}${
                    watherIcons.Degrees
                }</span>
                        <span class="forecast-data">${el.condition}</span>
                    </span>
                `;
            });
            elements.upcomingDiv().appendChild(forecastInfo);
        } catch (error) {
            elements.notification().textContent = 'Error';
        }
    });
})();
