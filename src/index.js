import { domGenerator } from "./weatherDom";
import './styles.css';

const pageLoad = (()=>{
    domGenerator.divMaker('humidity');
    console.log("calling")
})();

const weatherInfo = (()=>{

    let temp = getWeatherInfo('San Diego');
    let humidity = document.querySelector('.humidity');

    function getWeatherInfo(location){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=cf59f533d7699be0364c16aa6a3d8741', {
            mode: 'cors'
        })
        .then(function(response){
            console.log(response);
            return response.json();

        })
        .then(function(response){
            temp = response.main.temp
            humidity.textContent = `${temp}`;
            console.log(temp)
           return temp;
        })
    }
        return {
            getWeatherInfo,
        }
})();

    // let weatherResult = JSON.parse(weatherObject.getWeatherInfo);
    // console.table(weatherResult);



//http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741