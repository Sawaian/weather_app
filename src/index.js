import { domGenerator, weatherDataDisplayed } from "./weatherDom";
import './styles.css';
import { weatherInfo } from "./weatherData";

const cityForm = document.getElementById("location");
cityForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    cityForm.addEventListener('submit', async ()=> {
        const citySearch = await weatherInfo.getWeatherInfo('London');
        weatherDataDisplayed(citySearch);
    
    })
});

const pageLoad = (()=>{
    domGenerator.divMaker('temp');
    domGenerator.divMaker('city');
    console.log("calling")
})();


// weather info temp is called. 
// input goes into the function call .


//http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741