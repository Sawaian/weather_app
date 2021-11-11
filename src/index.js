console.log("hello world");

const weatherInfo = (()=>{
    function getWeatherInfo(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741', {
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
    let weatherObject = weatherInfo.getWeatherInfo();
    
    // let weatherResult = JSON.parse(weatherObject.getWeatherInfo);
    // console.table(weatherResult);
})();