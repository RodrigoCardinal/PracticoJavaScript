function convertToCelsius(temp) {
    console.log(`${temp}°F son ${((temp - 32) * 5 / 9).toFixed(1)}°C`);
}

function convertToFahrenheit(temp) {
    console.log(`${temp}°C son ${((temp * 9 / 5) + 32).toFixed(1)}°F`);
}

convertToCelsius(100);  
convertToFahrenheit(37.8);
