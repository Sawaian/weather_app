import { domGenerator } from "./weatherDom";
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
         return response.main.humidity
        })
    }
        return {
            getWeatherInfo,
        }
})();

function weatherUI(){
    let humidity = document.querySelector('.humidity');
    let weatherObject = weatherInfo.getWeatherInfo('London');
    console.log(JSON.parse(weatherObject))
};

const pageLoad = (()=>{
    domGenerator.divMaker('humidity');
    weatherUI()
    console.log("calling")
})();

    
 
 
    
    // let weatherResult = JSON.parse(weatherObject.getWeatherInfo);
    // console.table(weatherResult);



//http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741