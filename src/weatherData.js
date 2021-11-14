const weatherInfo = (()=>{

    function weatherJson (cityData){
        const {
            name: city,
            main: { temp: temperature },
        } = cityData;
        return { city, temperature};
    }

    let temp = getWeatherInfo('San Diego');

    async function getWeatherInfo(location){

        let cityLocation = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&APPID=cf59f533d7699be0364c16aa6a3d8741';

            const newCity = await fetch(cityLocation, { mode: 'cors'})
            .catch(function(err){
                console.log(err)
            })
            const cityData = weatherJson(newCity.json())
            // humidity.textContent = `${temp}`;
            console.log(temp)
           return temp;
        }

        return {
            getWeatherInfo,
        }
})();

export { weatherInfo };