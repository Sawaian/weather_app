import { humidity  } from "./weatherDom";
import './styles.css';

const weatherInfo = (()=>{
    function getWeatherInfo(location){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=cf59f533d7699be0364c16aa6a3d8741', {
            mode: 'cors'
        })
        .then(function(response){

            return response.json();

        })
        .then(function(response){
            console.log(response.main.humidity);
        })
    }
        return {
            getWeatherInfo,
        }
})();

const weatherUI = (()=>{

    let weatherObject = weatherInfo.getWeatherInfo('London');

            async function humidityControl(){
                console.log("calling");
                let humidity = await document.querySelector('humidity');
                return humidity; 
            }
})();
    
 
 
    
    // let weatherResult = JSON.parse(weatherObject.getWeatherInfo);
    // console.table(weatherResult);



//http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741