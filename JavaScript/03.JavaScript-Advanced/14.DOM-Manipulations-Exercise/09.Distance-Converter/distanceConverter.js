function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');
    const convertBtn = document.getElementById('convert');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');

    let kilometers, meters, centimeters, millimeters, miles, yards, feet, inches;

    convertBtn.addEventListener('click', (e) => {
        if (inputDistance.value) {
            const inputDistanceType = inputUnits.options[inputUnits.selectedIndex].text;
            const inputValue = Number(inputDistance.value);

            switch (inputDistanceType) {
                case 'Kilometers':
                    meters = inputValue * 1000;
                    break;
                case 'Meters':
                    meters = inputValue;
                    break;
                case 'Centimeters':
                    meters = inputValue * 0.01;
                    break;
                case 'Millimeters':
                    meters = inputValue * 0.001;
                    break;
                case 'Miles':
                    meters = inputValue * 1609.34;
                    break;
                case 'Yards':
                    meters = inputValue * 0.9144;
                    break;
                case 'Feet':
                    meters = inputValue * 0.3048;
                    break;
                case 'Inches':
                    meters = inputValue * 0.0254;
                    break;
            }

            kilometers = meters / 1000;
            centimeters = meters / 0.01;
            millimeters = meters / 0.001;
            miles = meters / 1609.34;
            yards = meters / 0.9144;
            feet = meters / 0.3048;
            inches = meters / 0.0254;

            const outputDistanceType = outputUnits.options[outputUnits.selectedIndex].text;

            switch (outputDistanceType) {
                case 'Kilometers':
                    outputDistance.value = kilometers;
                    break;
                case 'Meters':
                    outputDistance.value = meters;
                    break;
                case 'Centimeters':
                    outputDistance.value = centimeters;
                    break;
                case 'Millimeters':
                    outputDistance.value = millimeters;
                    break;
                case 'Miles':
                    outputDistance.value = miles;
                    break;
                case 'Yards':
                    outputDistance.value = yards;
                    break;
                case 'Feet':
                    outputDistance.value = feet;
                    break;
                case 'Inches':
                    outputDistance.value = inches;
                    break;
            }
        }
    });
}
