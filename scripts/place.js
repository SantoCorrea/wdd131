
/*################## WEATHER DATA ###################### */

const temperature = 12; 
const windSpeed = 15;   
const conditions = "Partly Cloudy";

document.querySelector('#temperature').textContent = `${temperature}°C`;
document.querySelector('#conditions').textContent = conditions;
document.querySelector('#wind').textContent = `${windSpeed} km/h`;


function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windChillValue = (temperature <= 10 && windSpeed > 4.8)
    ? calculateWindChill(temperature, windSpeed)
    : "N/A";

document.querySelector('#windchill').textContent =
    windChillValue === "N/A" ? windChillValue : `${windChillValue}°C`;



/*################## FOOTER JS ###################### */

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;


