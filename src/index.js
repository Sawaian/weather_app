import { domGenerator, weatherDataDisplayed } from "./weatherDom";
import './styles.css';
import { weatherInfo } from "./weatherData";

const cityForm = document.getElementById("location");
const inputField = document.getElementById("inputField")
cityForm.addEventListener('submit', (event)=>{ // Step 1:
    event.preventDefault();

    cityForm.addEventListener('submit', async ()=> { // Step 2:
        const citySearch = await weatherInfo.useWeatherInfo(inputField.value); //Step 3:
        weatherDataDisplayed(citySearch); // Step 13;
    
    })
});

const pageLoad = (()=>{ //Step 0:
    domGenerator.divMaker('temp');
    domGenerator.divMaker('city');
    console.log("calling")
})();


// weather info temp is called. 
// input goes into the function call .


//http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741