import { domGenerator } from "./weatherDom";
import './styles.css';

const pageLoad = (()=>{
    domGenerator.divMaker('humidity');
    console.log("calling")
})();


// class kelvinConvert {


//     //(K − 273.15) × 9/5 + 32 = °F. 
//     fahrenheit (temp){
//         let result = (temp - 273.15) * 9/5 + 32;
//         console.log(result + " " + "SD temp")
//     }
// }

// let fahrenheit = new kelvinConvert;

const weatherInfo = (()=>{

    let temp = getWeatherInfo('San Diego');
    let humidity = document.querySelector('.humidity');

    function getWeatherInfo(location){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&APPID=cf59f533d7699be0364c16aa6a3d8741', {
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




//http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741